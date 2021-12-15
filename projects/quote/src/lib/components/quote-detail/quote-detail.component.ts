import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {
  ToasterService,
  UserService,
  CoreService,
  PdfService,
  PaymentComponent,
} from 'projects/core/src/public-api';
import { QuoteHeaderComponent } from 'projects/quote/src/public-api';
import { QuoteDetailService } from '../quote/quote-detail.service';

@Component({
  selector: 'lib-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss'],
})
export class QuoteDetailComponent implements OnInit {
  quoteId: number = 0;
  @ViewChild('quoteHeader') quoteHeader: QuoteHeaderComponent =
    {} as QuoteHeaderComponent;
  constructor(
    private _route: ActivatedRoute,
    private _quoteDetailService: QuoteDetailService,
    private _toaster: ToasterService,
    private _dialog: MatDialog,
    private _user: UserService,
    private _core: CoreService,
    private _pdf: PdfService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.quoteId = params.id;
    });
  }

  saveQuote() {
    let quoteData: Array<any> = [];
    let quoteDetails = this.quoteHeader.quoteDetails;
    let pinnedRowData = this.quoteHeader.pinnedBottomRowData;
    let agGrid = this.quoteHeader.agGrid;
    agGrid?.api?.forEachNode((rowNode) => {
      let node = rowNode.data;
      let obj: any = {
        sgid: node?.sgid,
        button_type: node?.button_type,
        quote_id: quoteDetails.sgid,
        sub_total: pinnedRowData[0].is_total,
        old_month: node.old_month,
        monthly_rent: quoteDetails.monthly_rent,
        delivery_fee: quoteDetails.delivery_fee,
        pickup_fee: quoteDetails.pickup_fee,
        tax: pinnedRowData[2].is_total,
        net_total: quoteDetails.net_total,
        qty: node.is_qty,
        discount: node.discount || 0,
        quote_discount: quoteDetails.discount || 0,
        quote_discount_price: quoteDetails.discount_price || 0,
        percentage_discount: node.percentage_discount || 0,
        months: node.months,
        total: node.is_total,
        price: node.price,
        buy_price: node.buy_price,
        sale_price: node.price,
        apply_b2b_discount: node.b2b_discount || 0,
      };
      quoteData.push(obj);
    });
    this._quoteDetailService.updateQuote(quoteData).subscribe(
      (data) => {
        this._toaster.success('Quote Saved Successfully');
      },
      (error) => {
        this._toaster.error(error);
      }
    );
  }

  continueToPayment() {
    this._dialog
      .open(PaymentComponent, {
        height: '15rem',
        data: { quoteId: this.quoteHeader?.quoteDetails?.sgid },
      })
      .afterClosed()
      .subscribe(
        (data) => {
          data['quote_id'] = this.quoteHeader?.quoteDetails?.sgid;
          data['sgid'] = this._user.getUser().getId();
          this._quoteDetailService.createOrder(data).subscribe(
            (resp:any) => {
              if(resp.statusCode == 200){
                this._toaster.success(resp.result);
                this._router.navigate([
                  'order',
                  this.quoteHeader?.quoteDetails?.sgid,
                ]);
              } else {
                this._toaster.success(resp.result);
              }
            },
            (error) => {
              this._toaster.success(error)
            }
          );
        },
        (error) => {}
      );
  }

  async generatePdf() {
    let data = this._pdf.getAgGridRowsAndColumns(this.quoteHeader.agGrid);
    data.columns.shift()
    data.columns.unshift('S.NO')
    let img = document.getElementsByClassName('header-img')[0] as any;
    const block_total = await html2canvas(img);
    const block_canvas = block_total.toDataURL('image/png');
    let imagesObs = this._pdf.getAllTableBase64Images(data?.rows as [], 3);
    imagesObs.subscribe((images: any) => {
      let doc = new jsPDF();
      const pdf_font = this._pdf.addFont();
      const pdf_font_bold = this._pdf.addBoldFont();
      doc.addFileToVFS(pdf_font.name,pdf_font.value);
      doc.addFileToVFS(pdf_font_bold.name,pdf_font_bold.value);
     
      doc.addFont("Poppins.ttf", "Poppins", "normal");
      doc.addFont("Poppins-Bold.ttf", "Poppins-Bold", "bold");
      // doc.setFont('Poppins','normal');
      doc.setFont('Poppins-Bold','bold');
      doc.setFontSize(12);
      doc.addImage(block_canvas, 'PNG', 8, 5, 40, 10);
      doc.text('Quote Information', 8, 25);
      let info = [
        ['Project Name:', this.quoteHeader.quoteDetails.project_name, 'Address', this.quoteHeader.quoteDetails.address],
        ['Company Name:', this.quoteHeader.quoteDetails.company_name, 'Quote :', this.quoteHeader.quoteDetails.sgid],
        ['Contact No:', this.quoteHeader.quoteDetails.contactno, 'State:', this.quoteHeader.quoteDetails.is_state_name],
        ['Customer Name:', this.quoteHeader.quoteDetails.name, 'Email:', this.quoteHeader.quoteDetails.email],
        ['City:', this.quoteHeader.quoteDetails.city_name, 'Zipcode:', this.quoteHeader.quoteDetails.zipcode],
      ];
      autoTable(doc, {
        ...this._pdf.getInformationTableUserOptions(),
        startY:30,
        body: info,
        styles: { fontSize: 8 },
        columnStyles: {
          0: { cellWidth: 30 , font:'Poppins-Bold',fontStyle: 'bold'},
          1: { cellWidth: 25 , font:'Poppins' , fontStyle: 'normal'},
          2: { cellWidth: 17 , font:'Poppins-Bold',fontStyle: 'bold'},
          3: { font:'Poppins' , fontStyle: 'normal'},
        }
        
      });
//      doc.addPage();
      doc.text('Quote Summary', 7, 77);
      autoTable(doc, {
        ...this._pdf.getSummaryTableUserOptions(),
        startY:82,
        rowPageBreak: 'avoid',
      //   margin: {
      //     top: 10,
      //     bottom: 10,
      //     left: 1,
      //     right: 1,
      // },
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
            data.cell.text = '';
            data.cell.styles.halign = 'center';
            data.cell.styles.valign = 'middle';
          }
          if (data.section === 'body' && data.column.index === 10) {
            data.cell.text = `$${data.cell.text}`;
          }
        },
        didDrawCell: (data:any) => {
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
            data.cell.styles.halign = 'center';
            data.cell.styles.valign = 'middle'
          }
        },
      });
      doc.save('quote.pdf');
    });
  }
}
