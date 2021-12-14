import { Injectable } from '@angular/core';
import { GridReadyEvent } from 'ag-grid-community';
import jsPDF from 'jspdf';
import { UserOptions } from 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import { forkJoin, Observable } from 'rxjs';
import { CoreService } from './core.service';
import { textAlign } from 'html2canvas/dist/types/css/property-descriptors/text-align';
import { BOLD, FONT } from '../constants/poppins';
@Injectable({
  providedIn: 'root',
})
export class PdfService {
  font = FONT;
  bold=BOLD;
  constructor(private _core: CoreService) {}

  downloadAgGridToPdf(
    userOptions: UserOptions,
    name: string = 'table',
    agGrid?: GridReadyEvent
  ) {
    let doc = new jsPDF();
    doc.text('Quote Summary', 14, 15);
    userOptions = this.getDefaultUserOptions(userOptions, agGrid);
    autoTable(doc, userOptions);
    doc.save(name + '.pdf');
  }

  getDefaultUserOptions(
    userOptions: UserOptions,
    agGrid?: GridReadyEvent
  ): UserOptions {
    let agGridData;
    if (agGrid && (!userOptions.columns || !userOptions.body)) {
      agGridData = this.getAgGridRowsAndColumns(agGrid);
    }
    let defaultUserOptions: UserOptions = {
      html: userOptions.html || '',
      margin: userOptions.margin || { left: 5, right: 5 },
      theme: userOptions.theme || 'grid',
      columnStyles: userOptions.columnStyles,
      columns: userOptions.columns || agGridData?.columns || [],
      body: userOptions.body || agGridData?.rows || [],
      headStyles : {
        fillColor : [255, 0, 0]
      }
    };
    return { ...userOptions, ...defaultUserOptions };
  }

  getAgGridRowsAndColumns(agGrid: GridReadyEvent) {
    let data = this.getGridParsedData(agGrid);
    let columns = data ? data[0] : [];
    let rows = data?.slice(1);
    return {
      columns: columns,
      rows: rows,
    };
  }

  private getGridParsedData(agGrid: GridReadyEvent): Array<any> | undefined {
    return agGrid?.api
      ?.getDataAsCsv()
      ?.split(/\r\n|\n/)
      ?.map((y) => y.split('","').map((z) => z.replace('"', ' ').trim()));
  }
  private getModifiedRowData(row: Array<any> = []): Array<any> {
    return row.map((r: any) => {
      if (!parseInt(r[0])) {
        let temp = [];
        temp.push({ content: r[0], colSpan: r.length - 1 });
        temp.push(r[r.length - 1]);
        r = temp;
      }
      return r;
    });
  }

  getInformationTableUserOptions(): UserOptions {
    return {
      theme: 'plain',
      columnStyles: { 0: { fontStyle: 'bold', fontSize: 7 }, 2: { fontStyle: 'bold', fontSize: 9 } },
      margin: { left: 5, right: 5, top: 20 },
      styles :  {
        font:'Poppins-Bold'
      }
    };
  }
  getSummaryTableUserOptions(): UserOptions {
    return {
      margin: { left: 5, right: 5, top: 20 },
      theme: 'grid',
      headStyles : {
        fillColor : [243, 243, 243],
        textColor : [0,0,0],
        lineWidth :0,
        valign: 'middle',
        halign : 'center',
        fontSize: 8,
        font:'Poppins-Bold',
        fontStyle:'bold',
        cellPadding:2,
      },
      bodyStyles : {
        valign: 'middle',
        halign : 'center',
        fontSize: 9,
        font:'Poppins',
        fontStyle:'normal',
      },
      styles :  {
        cellPadding:1,
     
      },
      
    };
  }
  getAllTableBase64Images(rows: Array<any>, imgIndex: number): Observable<any> {
    let sub = rows?.filter((row) => row[imgIndex] && row[imgIndex] != 'NA');
    sub = sub?.map((row) => this._core.getBase64Image(row[imgIndex]));
    return forkJoin(sub);
  }

  addFont() {
     return {
       name:this.font.name,
       value:this.font.value
     }
  }

  addBoldFont() {
    return {
      name:this.bold.name,
      value:this.bold.value
    }
 }
}
