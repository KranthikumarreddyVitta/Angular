import { MatDialog } from '@angular/material/dialog';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteCreateFormComponent } from 'projects/quote/src/lib/common/components/quote-create-form/quote-create-form.component';
import { AddproductComponent } from 'projects/quote/src/lib/common/components/addproduct/addproduct.component';
import { MoodboardService } from '../../services/moodboard.service';
import autoTable from 'jspdf-autotable';

import {
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import {
  ComputationService,
  CoreService,
  CounterComponent,
  ImageRendererComponent,
  PdfService,
  ToasterService,
  UserService,
} from 'projects/core/src/public-api';
import {
  BehaviorSubject,
  merge,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  tap,
} from 'rxjs/operators';
import {
  ItemTypeComponent,
  TotalCellRendererComponent,
} from 'projects/quote/src/public-api';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import jsPDF from 'jspdf';
import { ProductDetailsComponent } from 'projects/shop/src/projects';
import { MatStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { FormControl, FormGroup } from '@angular/forms';
import html2canvas from 'html2canvas';

@Component({
  selector: 'lib-moodboard',
  templateUrl: './moodboard.component.html',
  styleUrls: ['./moodboard.component.scss'],
})
export class MoodboardComponent implements OnInit, AfterViewInit {
  public mbId: any = '';
  public userid: any = null;
  selectedIndex = 0;
  startCount = 0;
  lastUserCount = 0;
  // placeholder = 'Search Products';
  subscription: Subscription | null = null;
  show = false;

  minRentalPrice: any = '';
  maxRentalPrice: any = '';
  // filter form group;
  filterFormGroup: FormGroup = new FormGroup({});
  @ViewChild('quickFilter', { static: true }) template: ElementRef | null =
    null;
  @ViewChild('stepper') private myStepper: MatStepper | null = null;
  @ViewChild('tabsReference', { static: true })
  tabsReference: MatTabGroup | null = null;

  constructor(
    private moodboardService: MoodboardService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _pdf: PdfService,
    private _router: Router,
    private _dialog: MatDialog,
    private _toaster: ToasterService,
    private _user: UserService,
    private _computationService: ComputationService,
    private _coreService: CoreService
  ) {
    this.mbId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userid = this._user.getUser().getId();
  }

  ngAfterViewInit(): void {
    this.setProductTab(0);
  }
  agGrid: GridReadyEvent = {} as GridReadyEvent;
  bannerIconImg: any = 'assets/moodboard/images/moodboard.svg';
  bannerIconImgTxt: any = 'Moodboard';
  moodboardDetails: any = '';
  mbQuotesList: any = [];
  stateList: any = [];
  selectedQuoteIdDD: any = 0;
  categoriesList: Subject<any[]> = new Subject();
  catListDefault: any[] = [];
  selectedCategory: any = null;
  cityList: Subject<any[]> = new Subject();
  cityListDefault: any[] = [];
  selectedCity: any = [];
  min_price = new FormControl('');
  max_price = new FormControl('');
  min_price_inventory: any = '';
  searchTxt: any = null;
  productdata: any = [];
  items: any = [];
  // min_price_change :BehaviorSubject<any> = new BehaviorSubject(null);
  catagorydata = [
    {
      imageSrc: 'assets/moodboard/images/Categories-01.png',
      value: 'Living Room',
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-02.png',
      value: 'Bedroom',
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-03.png',
      value: 'Dining Room',
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-04.png',
      value: 'Office',
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-05.png',
      value: 'Outdoor',
    },
    {
      imageSrc: 'assets/moodboard/images/Categories-06.png',
      value: 'Others',
    },
  ];
  frameworkComponents = {
    ImageRendererComponent: ImageRendererComponent,
    TotalCellRendererComponent: TotalCellRendererComponent,
    ItemTypeCellRenderer: ItemTypeComponent,
    CounterCellRenderer: CounterComponent,
  };
  pinnedBottomRowData = [
    {
      subTotal: 'abc',
      sgid: 'SUB TOTAL ($)',
      is_total: '0',
      isExtraRow: true,
    },
    {
      subTotal: 'abc',
      sgid: 'DELIVERY FEE ($)',
      is_total: '0',
      isExtraRow: true,
    },
    {
      subTotal: 'abc',
      sgid: 'TAXES ($)',
      is_total: '0',
      isExtraRow: true,
      taxPercent: 1,
    },
    {
      subTotal: 'abc',
      sgid: 'TOTAL ($)',
      is_total: '0',
      isExtraRow: true,
    },
  ];

  columnDefs = [
    {
      field: 'sgid',
      width: 120,
      headerName: '',
      headerTooltip: '',
      colSpan: (params: any) => (params.data.subTotal === 'abc' ? 10 : 1),
      cellStyle: (params: any) => {
        if (params.data.subTotal === 'abc') {
          return { 'text-align': 'end' };
        }
        return '';
      },
    },
    { field: 'warehouse_name', headerName: 'CITY' },
    { field: 'sku', headerName: 'SKU' },
    {
      headerName: 'IMAGE',
      cellRenderer: 'ImageRendererComponent',
      field: 'variation.images[0].image_url.small',
      cellStyle: {
        padding: '0.3rem',
      },
      valueGetter: (params: ICellRendererParams) => {
        return params.data?.variation?.images[0]?.image_url?.small;
      },
    },
    {
      headerName: 'PRODUCT NAME',
      field: 'name',
      width: '250px',
    },
    {
      headerName: 'TYPE',
      field: 'button_type',
      cellRenderer: 'ItemTypeCellRenderer',
      valueGetter: (params: ICellRendererParams) => {
        return params.data.button_type === 0 ? 'Rent' : 'Buy';
      },
    },
    {
      headerName: 'QTY',
      field: 'is_qty',
      cellRenderer: 'CounterCellRenderer',
    },
    {
      headerName: 'BUY PRICE ($)',
      field: 'buy_price',
      valueGetter: (params: ICellRendererParams) => {
        return params.data.button_type === 1 ? params.data.buy_price : 'NA';
      },
    },
    {
      headerName: 'RENTAL PRICE ($) /MONTH',
      field: 'price',
      cellRenderer: (params: ICellRendererParams) => {
        return params.data.button_type === 0 ? params.value : 'NA';
      },
    },
    {
      headerName: 'MONTHS',
      field: 'months',
    },
    {
      headerName: 'TOTAL ($)',
      field: 'is_total',
      cellRenderer: 'TotalCellRendererComponent',
    },
  ];
  rowData: Observable<any[]> = new Observable();
  gridOptions: GridOptions = {
    onGridReady: (api: GridReadyEvent) => {
      this.agGrid = api;
      this.onGridReady(api);
    },
    rowHeight: 100,
    context: this,
    headerHeight: 100,
    getRowHeight: (params: any) => {
      return params?.data?.isExtraRow ? 50 : 100;
    },
  };
  defaultColDef = {
    wrapText: true,
    cellClass: 'grid-cell',
    cellStyle: {
      'line-height': 'normal',
      'align-items': 'center',
      'justify-content': 'center',
      display: 'flex',
      padding: '0 0.5rem',
    },
  };
  onGridReady(evt: GridReadyEvent) {
    this.agGrid = evt;
    evt.api.sizeColumnsToFit();
    this.rowData = this.getMoodboardSummary();
  }

  counterFComponentUpdate(params: ICellRendererParams) {
    this.moodboardService.updateMDItem(params.data).subscribe((data) => {
      this.refresh();
    });
  }
  getMoodboardSummary<T>(): Observable<T> {
    return this.moodboardService.getMBSummary<T>(this.mbId).pipe(
      tap((x: any) => {
        this.agGrid.api.redrawRows();
      }),
      map((data: any) => {
        this.productdata = data;
        this.productdata.forEach((elem: any, index: number) => {
          this._coreService
            .getBase64Image(elem.variation?.images[0]?.image_url?.small)
            .subscribe((res) => {
              elem.imagee = 'data:image/jpeg;base64,' + res;
              this.productdata[index].variation.images[0].image_url['small64'] =
                'data:image/jpeg;base64,' + res.imageurl;
            });
        });
        return data.map((item: any, index: number) => {
          item.sgid = index + 1;
          return item;
        });
      })
    );
  }
  openModal(templateRef: any) {
    let dialogRef = this._dialog.open(templateRef, {
      width: '90%',
      maxHeight: '85vh',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  closeModal() {
    this._dialog.closeAll();
  }
  updateBottomData(data: any) {
    this.pinnedBottomRowData[1].is_total = data?.delivery_fee;
    this.pinnedBottomRowData[2].sgid =
      'TAXES (' + data?.states?.sale_tax_rate + '%) ($)';
    this.pinnedBottomRowData[2].taxPercent = data?.states?.sale_tax_rate;
    this.pinnedBottomRowData[2].is_total = data?.tax_amount;
    this.pinnedBottomRowData[3].is_total = data?.tax_amount;
  }

  ngOnInit(): void {
    this.getMoodboard();
    this.getMBQuote(this.mbId);
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  requestRendering() {
    this.moodboardService
      .requestRendering({ moodboard_id: this.mbId })
      .subscribe(
        (response: any) => {
          this._toaster.success('Request ' + response.result);
        },
        (error) => {
          this._toaster.error('Request failed. please try later');
        }
      );
  }
  selectedQuote(ev: any) {
    this.selectedQuoteIdDD = ev.target.value;
  }

  getMBQuote(mbId: any) {
    this.moodboardService.getMBQuote(mbId).subscribe((response: any) => {
      this.mbQuotesList = response.quote;
      this.selectedQuoteIdDD = response.quote[0]?.sgid;
    });
  }
  addToQuote() {
    this._dialog
      .open(AddproductComponent, {
        height: '80%',
        width: '50%',
        data: {
          isDialog: true,
          quoteId: this.selectedQuoteIdDD,
          mbid: this.mbId,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
      });
  }
  getMoodboard() {
    this.moodboardService.getMoodBoard(this.mbId).subscribe((response: any) => {
      this.moodboardDetails = response;
      this.updateBottomData(response.moodboard);
    });
  }

  editMB() {
    this.router.navigateByUrl('/moodboard/edit/' + this.mbId);
  }
  copyMB() {
    this.router.navigateByUrl('/moodboard/create/' + this.mbId);
  }

  createNewQuote() {
    this._dialog
      .open(QuoteCreateFormComponent, {
        height: '500px',
        width: '800px',
        data: {
          isDialog: true,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
      });
  }
  deleteItem(mbItem: any) {
    let obj = {
      button_type: mbItem.button_type,
      moodboard_id: mbItem.moodboard_id,
      product_id: mbItem.product_id,
      sku: mbItem.sku,
      warehouse_id: mbItem.warehouse_id,
      user_id: this._user.getUser().getId(),
    };
    this.moodboardService.deleteItemToMoodboard(obj).subscribe(
      (data: any) => {
        if (data.statusCode == 200) {
          this._toaster.success(data?.result);
          this.getMoodboard();
          this.onGridReady(this.agGrid);
        } else this._toaster.error(data.result);
      },
      (error) => this._toaster.error('Fail to add')
    );
  }

  // generateMDPdf() {
  //   let data = this._pdf.getAgGridRowsAndColumns(this.agGrid);
  //   let imagesObs = this._pdf.getAllTableBase64Images(data?.rows as [], 3);
  //   imagesObs.subscribe((images) => {
  //     let doc = new jsPDF();
  //     doc.text('Moodboard Information', 10, 15);
  //     let info = [
  //       ['Project Name:', this.moodboardDetails?.moodboard?.project_name],
  //       ['Company Name:', this.moodboardDetails?.moodboard?.company_name],
  //       ['Moodboard :', this.moodboardDetails?.moodboard?.sgid],
  //       ['State:', this.moodboardDetails?.moodboard?.state.name],
  //       ['Moodboard Name:', this.moodboardDetails?.moodboard?.boardname],
  //       ['City:', this.moodboardDetails?.moodboard?.city],
  //       ['Zipcode:', this.moodboardDetails?.moodboard?.zipcode],
  //     ];
  //     autoTable(doc, {
  //       ...this._pdf.getInformationTableUserOptions(),
  //       body: info,
  //     });

  //     doc.addPage();
  //     doc.text('Moodboard Summary', 10, 15);
  //     autoTable(doc, {
  //       ...this._pdf.getSummaryTableUserOptions(),
  //       columnStyles: {
  //         0: { cellWidth: 9 },
  //         1: { cellWidth: 20 },
  //         2: { cellWidth: 10 },
  //         3: { cellWidth: 20 },
  //         4: { cellWidth: 30 },
  //         5: { cellWidth: 15 },
  //         6: { cellWidth: 10 },
  //         7: { cellWidth: 20 },
  //         8: { cellWidth: 20 },
  //         11: { cellWidth: 20 },
  //       },
  //       columns: data.columns,
  //       body: data?.rows?.map((r: any) => {
  //         if (!parseInt(r[0])) {
  //           let temp = [];
  //           temp.push({ content: r[0], colSpan: r.length - 1 });
  //           temp.push(r[r.length - 1]);
  //           r = temp;
  //         }
  //         return r;
  //       }),
  //       willDrawCell: (data) => {
  //         if (data.section === 'body' && data.column.index === 3) {
  //           data.cell.raw = '';
  //           data.cell.text = [];
  //         }
  //       },
  //       didDrawCell: (data) => {
  //         if (data.section === 'body' && data.column.index === 3) {
  //           var base64Img = 'data:image/jpeg;base64,' + images[data.row.index];
  //           doc.addImage(
  //             base64Img,
  //             'JPEG',
  //             data.cell.x + 1,
  //             data.cell.y + 1,
  //             18,
  //             18
  //           );
  //         }
  //       },
  //     });
  //     doc.save('moodboard.pdf');
  //   });
  // }

  async generateMDPdf() {
    let vm = this;
    let data = this._pdf.getAgGridRowsAndColumns(this.agGrid);
    data.columns.shift()
    data.columns.unshift('S.NO')
    let img = document.getElementsByClassName('header-img')[0] as any;
    const block_total = await html2canvas(img);
    const block_canvas = block_total.toDataURL('image/png');
    let imagesObs = this._pdf.getAllTableBase64Images(data?.rows as [], 3);
    imagesObs.subscribe((images) => {
      let doc = new jsPDF();
      const pdf_font = this._pdf.addFont();
      const pdf_font_bold = this._pdf.addBoldFont();
      doc.addFileToVFS(pdf_font.name,pdf_font.value);
      doc.addFileToVFS(pdf_font_bold.name,pdf_font_bold.value);
      doc.addFont("Poppins.ttf", "Poppins", "normal");
      doc.addFont("Poppins-Bold.ttf", "Poppins-Bold", "bold");
      doc.addImage(block_canvas, 'PNG', 8, 5, 40, 10);
      doc.setFont('Poppins-Bold','bold');
      doc.setFontSize(12);
      doc.text('Moodboard Information', 8, 25);
      let info = [
        [
          'Project Name:',
          this.moodboardDetails?.moodboard?.project_name,
          'Company Name:',
          this.moodboardDetails?.moodboard?.company_name,
        ],
        [
          'Moodboard:',
          this.moodboardDetails?.moodboard?.sgid,
          'State:',
          this.moodboardDetails?.moodboard?.state.name,
        ],
        [
          'Moodboard Name:',
          this.moodboardDetails?.moodboard?.boardname,
          'City:',
          this.moodboardDetails?.moodboard?.city,
        ],
        ['Zipcode:', this.moodboardDetails?.moodboard?.zipcode],
        [],
      ];
      autoTable(doc, {
        ...this._pdf.getInformationTableUserOptions(),
        startY:29,
        margin: { left: 7 },
        showHead: 'firstPage',
        body: info,
        styles: { fontSize: 8 },
        columnStyles: {
          0: { cellWidth: 40 , font:'Poppins-Bold',fontStyle: 'bold'},
          1: { cellWidth: 30 , font:'Poppins' , fontStyle: 'normal'},
          2: { cellWidth: 30 , font:'Poppins-Bold',fontStyle: 'bold'},
          3: { font:'Poppins' , fontStyle: 'normal'},
        }
      });
      doc.text('Product Details', 8, 67).setFontSize(12);
      let productImages = this._pdf.getAllTableBase64Images(this.productdata as [], 3);
      autoTable(doc, {
        html: '#printImage',
        margin: { left: 8 },
        // bodyStyles: { minCellHeight: 60, minCellWidth: 60 },
        startY:73,
        theme: 'plain',
        styles: { valign: 'middle', cellPadding:1, },
        tableWidth: 'auto',
        headStyles: {
          valign: 'middle',
          halign : 'left',
          fontSize: 8,
          font:'Poppins-Bold',
          fontStyle:'bold',
          cellPadding:2,
        },
        bodyStyles : {
          fontSize: 9,
          font:'Poppins',
          fontStyle:'normal',
        },
        columnStyles: {
          0: { cellWidth: 40,minCellHeight:30, valign: 'middle',
          halign : 'left'},
          1: { cellWidth: 40 ,valign: 'top',
          halign : 'left',},
          2: { cellWidth: 40 ,valign: 'top',
          halign : 'left',}
        },
        didDrawCell: function (data) {
          if (data.cell.section === 'body' && data.column.index === 0) {
            let td: any = data.cell.raw;
            if (td) {
              let img = td.getElementsByTagName('img')[0];
              let product = td.getElementsByClassName('productName')[0];
              var dim = data.cell.height - data.cell.padding('vertical');
              doc.addImage(
                img.src,
                'jpeg',
                data.cell.x,
                data.cell.y,
                20,
                20
              );
            }
          }
        },
        willDrawCell: function (data) {
          let td = data.cell.raw;
        },
      });
      doc.addPage();
      doc.text('Moodboard Summary', 10, 15, { align: 'left' });
      autoTable(doc, {
        ...this._pdf.getSummaryTableUserOptions(),
        showHead: 'firstPage',
        rowPageBreak: 'avoid',
        columnStyles: {
          0: { cellWidth: 11 },
          1: { cellWidth: 20 },
          2: { cellWidth: 18 },
          3: { cellWidth: 20 },
          4: { cellWidth: 30 },
          5: { cellWidth: 15 },
          6: { cellWidth: 14 },
          7: { cellWidth: 20 },
          8: { cellWidth: 20 },
          11: { cellWidth: 12 },
          12: { cellWidth: 18 },
        },
        columns: data.columns,
        body: data?.rows?.map((r: any) => {
          if (!parseInt(r[0])) {
            let temp = [];
            temp.push({ content: r[0], colSpan: r.length - 1 });
            temp.push(r[r.length - 1]);
            r = temp;
          }
          return r;
        }),
        willDrawCell: (data:any) => {
          if (data.section === 'body' && data.column.index === 3) {
            data.cell.raw = '';
            data.cell.text = [];
          }
          if (data.section === 'body' && data.column.index === 10) {
            data.cell.text = `$${data.cell.text}`;
          }
        },
        didDrawCell: (data) => {
          if (data.section === 'body' && data.column.index === 3) {
            var base64Img = 'data:image/jpeg;base64,' + images[data.row.index];
            doc.addImage(
              base64Img,
              'JPEG',
              data.cell.x + 1,
              data.cell.y + 1,
              18,
              18
            );
          }
        },
      });
      doc.save('moodboard.pdf');
    });
  }
  productDetails(item: any) {
    this._dialog
      .open(ProductDetailsComponent, {
        height: '90%',
        width: '90%',
        disableClose: true,
        data: {
          forDialog: true,
          forHitler: true,
          forMoodboard:
            this._user.getUser().getId() ===
            this.moodboardDetails?.moodboard?.userid,
          forQuote: false,
          item: item,
          mb: this.moodboardDetails?.moodboard,
          moodboardId: this.moodboardDetails?.moodboard?.id,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data && data.event) {
          this.getMoodboard();
          this.onGridReady(this.agGrid);
          this.setProductTab(0);
        }
      });
  }

  increaseQuantity(value: any, md: any) {
    if (value >= 1 && value <= md.total_warehouse_quantity) {
      md.qty = md.is_qty = value;
      let price = md.button_type == 1 ? md.buy_price : md.price;
      md.is_total = this._computationService.getProductTotalAmount(
        price,
        0,
        md.qty
      );
      this.moodboardService.updateMDItem(md).subscribe((data) => {
        this.refresh();
      });
    }
  }

  refresh() {
    this.getMoodboard();
    this.onGridReady(this.agGrid);
  }

  public goto(index: number): void {
    if (index == 0) return; // First step is not selected anymore -ok
    this.selectedIndex = index;
  }

  setProductTab(index: number) {
    const tabGroup = this.tabsReference;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
    const tabCount = tabGroup._tabs.length;
    tabGroup.selectedIndex = index;
  }
}
