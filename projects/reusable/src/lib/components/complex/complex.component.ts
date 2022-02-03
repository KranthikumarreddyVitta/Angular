import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReusableService } from '../../reusable.service';

@Component({
  selector: 'lib-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.scss']
})
export class ComplexComponent implements OnInit {

  form = this.fb.group({
    address: this.fb.group({
      line1: new FormControl(),
      city: new FormControl(),
      pin: new FormControl()
    }),
    emails: this.fb.array([])
  }) as FormGroup;
  constructor(private reusable: ReusableService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.reusable.getPersonal().subscribe((data: any) => {
      if (data) {
        this.createForm(data?.data)
      }
    })
  }

  createForm(value: any) {
    console.log(value)
    this.form.addControl('name', new FormControl(value.name ? value.name : ''));
    this.form.addControl('age', new FormControl(value.age ? value.age : ''));
    this.form.patchValue({ address: value.address })
    value.emails.forEach((element: any , index:any) => {
      this.addEmails(element , index)
    });
    console.log(this.form.value);
  }

  addEmails(data: any ,index:any) {
    let group = new FormGroup({});
    group.addControl(index + 'original' , new FormControl(data.original ? data.original : ''));
    group.addControl(index + 'copy' , new FormControl(data.copy ? data.copy : ''));
    const arr = this.form.get('emails')  as FormArray;
    arr.push(group);
  }

}
