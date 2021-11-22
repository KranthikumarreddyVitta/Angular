import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ToasterService, UserService, CoreService, PdfService, PaymentComponent } from 'projects/core/src/public-api';
import { QuoteHeaderComponent } from 'projects/quote/src/public-api';
import { QuoteDetailService } from '../quote/quote-detail.service';

@Component({
  selector: 'lib-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {
  quoteId: number = 0;
  @ViewChild('quoteHeader') quoteHeader: QuoteHeaderComponent =
    {} as QuoteHeaderComponent;
  constructor( private _route: ActivatedRoute,
    private _quoteDetailService: QuoteDetailService,
    private _toaster: ToasterService,
    private _dialog: MatDialog,
    private _user: UserService,
    private _core: CoreService,
    private _pdf: PdfService) { }

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
              (data) => {
                this._toaster.success('Payment Done');
              },
              (error) => {
                this._toaster.success('Payment Fails');
              }
            );
          },
          (error) => {}
        );
    }
  
    generatePdf() {
      let data = this._pdf.getAgGridRowsAndColumns(this.quoteHeader.agGrid);
      let imagesObs = this._pdf.getAllTableBase64Images(data?.rows as [], 3);
      imagesObs.subscribe((images: any) => {
        let doc = new jsPDF();
        doc.setFillColor(0,0,0);
        doc.rect(5,5,200,15,'F');
        doc.setTextColor(255,255,255);
        doc.text('Quote Information', 8,15);
        let info = [
          ['Project Name:', this.quoteHeader.quoteDetails.project_name],
          ['address', this.quoteHeader.quoteDetails.address],
          ['Company Name:', this.quoteHeader.quoteDetails.company_name],
          ['Quote :', this.quoteHeader.quoteDetails.sgid],
          ['Contact No:', this.quoteHeader.quoteDetails.contactno],
          ['State:', this.quoteHeader.quoteDetails.is_state_name],
          ['Customer Name:', this.quoteHeader.quoteDetails.name],
          ['Email:', this.quoteHeader.quoteDetails.email],
          ['City:', this.quoteHeader.quoteDetails.city_name],
          ['Zipcode:', this.quoteHeader.quoteDetails.zipcode],
        ];
        autoTable(doc, {
          ...this._pdf.getInformationTableUserOptions(),
          body: info,
        });
        doc.addPage();
        doc.setFillColor(0,0,0);
        doc.rect(5,5,200,15,'F');
        doc.setTextColor(255,255,255);
        doc.text('Quote Summary', 10, 15);
        autoTable(doc, {
          ...this._pdf.getSummaryTableUserOptions(),
          columnStyles: {
            0: { cellWidth: 9 },
            1: { cellWidth: 20 },
            2: { cellWidth: 10 },
            3: { cellWidth: 20 },
            4: { cellWidth: 30 },
            5: { cellWidth: 15 },
            6: { cellWidth: 10 },
            7: { cellWidth: 20 },
            8: { cellWidth: 20 },
            11: { cellWidth: 20 },
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
          willDrawCell: (data) => {
            if (data.section === 'body' && data.column.index === 3) {
              data.cell.raw = '';
              data.cell.text = [];
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
        doc.save('quote.pdf');
      });
    }
}
