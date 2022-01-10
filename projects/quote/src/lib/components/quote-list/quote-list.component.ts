import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GridOptions, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import {
  ImageRendererComponent,
  UserService,
} from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { quoteRoute } from '../../quote-routing';
import { QuoteListService } from './quote-list.service';

@Component({
  selector: 'lib-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss'],
})
export class QuoteListComponent implements OnInit {
  quoteInfo = {
    bannerIconImg: 'assets/dashboard/images/quote.svg',
    bannerIconImgTxt: 'Quote Icon',
    bannerImg: 'assets/quote/images/quote_banner.jpg',
    bannerImgTxt: 'Quote Banner Image',
    bannerBottomTxt:
      'Get an estimated cost for a particular moodboard, piece or project.',
    text: 'Quote',
  };
  projectName :any = ''

  columnDefs = [
    { field: 'sgid', headerName: 'Quote Number' },
    { field: 'name', headerName: 'Customer name' },
    { field: 'company_name', headerName: 'Company Name' },
    { field: 'project_name', headerName: 'Project Name' },
    {
      field: 'created_at',
      headerName: 'Quote Created Date',
      valueFormatter : (params:ICellRendererParams)=>{
        return params?.data?.created_at?.split(' ')[0];
      }
    },
    {
      field: 'is_order',
      headerName: 'Order Submitted',
      onCellClicked: (params: any) => {
        console.log(params);
      },
    },
  ];

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

  rowData: Observable<any[]> = new Observable();
  gridOptions: GridOptions = {
    onRowClicked: (param) => this.onRowClicked(param),
    // headerHeight: 100
    rowHeight: 50,
    onGridReady: (api: GridReadyEvent) => this.onGridReady(api),
  };

  selectedButton: 'allQuote' | 'myQuote' = 'allQuote';
  frameworkComponents = {
    ImageRendererComponent: ImageRendererComponent,
  };
  projectList : any= []
  selectedProject :any = "";
  constructor(
    private _quoteListService: QuoteListService,
    private _router: Router,
    private _userService: UserService ,
  ) {}

  ngOnInit(): void {
    this.getProjectList()
  }
  onGridReady(api: GridReadyEvent) {
    this.getQuoteList()
    api.api.sizeColumnsToFit();
  }

  onRowClicked(param: any) {
    let quoteId = param?.data?.sgid;
    if (param?.data?.order_status && quoteId) {
      this._router.navigate(['business/order', quoteId]);
    } else if (quoteId) {
      this._router.navigate(['business/quote', quoteId]);
    }
  }

  getQuoteList() {
    //this.getProjectList();
    this.rowData = this._quoteListService.getQuoteList(
      this._userService.getUser().getId(),
      this.selectedButton == 'myQuote'?'my':'',
      'quotes',
      this.selectedProject
    );
  }
  myQuote(){
    this.selectedButton = 'myQuote';
    this.getQuoteList()
  }
  allQuote(){
    this.selectedButton ='allQuote';
    this.getQuoteList();
  }

  onTabChanged(ev: any){
    if(ev.index == 0) {
      this.allQuote();
    }
    if(ev.index == 1) {
      this.myQuote();
    }
  }

  getProjectList(){
    let userId =  this._userService.getUser().getId();
    this._quoteListService.getProjectList(this.selectedButton == 'myQuote'? 'my':'all',userId).subscribe((response:any) => {
      this.projectList = response.quoteProject;
    });    
  }

  createQuote() {
    this._router.navigate(['quote/create']);
  }

  projectFilter(value: any){
    this.selectedProject = value?.target.value;
    this.getQuoteList();
  }
}
