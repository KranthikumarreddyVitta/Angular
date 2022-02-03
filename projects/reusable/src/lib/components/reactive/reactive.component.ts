import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReusableService } from '../../reusable.service';

@Component({
  selector: 'lib-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  totalData: any;
  form = this.fb.group({});
  controls: any = [];

  constructor(private reusable: ReusableService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.reusable.getList().subscribe((data: any) => {
      if (data) {
        this.createForm(data?.data)
      }
    })
  }

  createForm(list: any) {
    if (list && list.length) {
      list.forEach((element: any, index: any) => {
        if (element) {
          let control = [{
            id: element.id,
            name: element.name
          }]
          this.controls.push(...control)
          this.form.addControl(element.id, new FormControl(element.selected ? true : false))
        }
      });
    }
  }



}
