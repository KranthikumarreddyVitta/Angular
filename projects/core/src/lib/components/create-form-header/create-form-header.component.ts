import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form-header',
  templateUrl: './create-form-header.component.html',
  styleUrls: ['./create-form-header.component.scss']
})
export class CreateFormHeaderComponent implements OnInit {

  @Input() iconPath :  string ="";
  @Input() text = "";
  @Input() subTitle = "";
  constructor() { }

  ngOnInit(): void {
  }

}
