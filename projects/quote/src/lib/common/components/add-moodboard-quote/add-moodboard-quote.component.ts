import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToasterService, UserService } from 'projects/core/src/public-api';
import { QuoteService } from 'projects/quote/src/public-api';
import { QuoteHeaderService } from '../quote-header/quote-header.service';

@Component({
  selector: 'lib-add-moodboard-quote',
  templateUrl: './add-moodboard-quote.component.html',
  styleUrls: ['./add-moodboard-quote.component.scss']
})
export class AddMoodboardQuoteComponent implements OnInit {

  moodboardList: any;

  constructor(private _quoteHeaderService: QuoteHeaderService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _user: UserService, private _quoteService: QuoteService,
    private _toaster: ToasterService ,
    private _dialogRef: MatDialog) { }
  ngOnInit() {
    this.getMoodBoards();
  }

  getMoodBoards() {
    this._quoteHeaderService.getMoodBoardByUser().subscribe(
      (data: any) => {
        this.moodboardList = data.result;
      },
      (error) => {
        this.moodboardList = [];
      }
    );
  }

  add(type: any){
    if(type == '') {
     let obj =  {
        quote_id :this.dialogData.quoteId,
        moodboard_id: this.dialogData.mbid,
        user_id: this._user.getUser().getId()
        };
        this._quoteService.addMBQuote(obj).subscribe((resp: any) => {
          if (resp.statusCode == 200) {
            this._toaster.success(resp.message);
            this._dialogRef.closeAll();
          } else {
            this._toaster.success(resp.message);
            this._dialogRef.closeAll();
          }
        });  
    }
    if(type == 'fp') {
      
    }
    if(type == 'fpu') {
    
    }

  }

  closeModal() {
    this._dialogRef.closeAll()
  }
}
