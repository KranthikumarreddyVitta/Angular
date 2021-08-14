import { Injectable } from '@angular/core';
import { GridReadyEvent } from 'ag-grid-community';
import jsPDF from 'jspdf';
import { UserOptions } from 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import { forkJoin, Observable } from 'rxjs';
import { CoreService } from './core.service';
@Injectable({
  providedIn: 'root',
})
export class PdfService {
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
      columnStyles: { 0: { fontStyle: 'bold', fontSize: 11 } },
      margin: { left: 15, right: 15, top: 20 },
    };
  }
  getSummaryTableUserOptions(): UserOptions {
    return {
      margin: { left: 5, right: 5, top: 20 },
      theme: 'grid',
    };
  }
  getAllTableBase64Images(rows: Array<any>, imgIndex: number): Observable<any> {
    let sub = rows?.filter((row) => row[imgIndex] && row[imgIndex] != 'NA');
    sub = sub?.map((row) => this._core.getBase64Image(row[imgIndex]));
    return forkJoin(sub);
  }
}
