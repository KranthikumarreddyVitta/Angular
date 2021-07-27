import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-image-renderer',
  templateUrl: './image-renderer.component.html',
  styleUrls: ['./image-renderer.component.scss']
})
export class ImageRendererComponent implements OnInit {
  imgSrc: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  

   // gets called once before the renderer is used
   agInit(params: ICellRendererParams): void {
       this.imgSrc = this.getValueToDisplay(params);
   }

   // gets called whenever the cell refreshes
   refresh(params: ICellRendererParams) {
       // set value into cell again
       this.imgSrc = this.getValueToDisplay(params);
   }

   getValueToDisplay(params: ICellRendererParams) {
       return params.valueFormatted ? params.valueFormatted : params.value;
   }

}
