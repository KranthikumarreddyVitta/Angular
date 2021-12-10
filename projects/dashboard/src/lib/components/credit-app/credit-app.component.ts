import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-credit-app',
  templateUrl: './credit-app.component.html',
  styleUrls: ['./credit-app.component.scss']
})
export class CreditAppComponent implements OnInit {

  sections: Array<any> = [{
    label:'Company & Ownership Information',
    isChecked: false
  },{
    label:'Business & Property Information',
    isChecked: false
  },{
    label:'Documentation',
    isChecked: false
  },{
    label:'Guarantor Information',
    isChecked: false
  },{
    label:'Payment Authorization',
    isChecked: false
  },{
    label:'Terms and Conditions',
    isChecked: false
  },]
  constructor() { }

  ngOnInit(): void {
  }

}
