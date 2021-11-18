import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  title: string = '';
  subTitle: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) {
    this.title = dialogData.title;
    this.subTitle = dialogData.subTitle;
  }

  ngOnInit(): void {}
}
