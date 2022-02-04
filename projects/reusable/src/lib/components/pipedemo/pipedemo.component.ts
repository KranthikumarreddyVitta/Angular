import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReusableService } from '../../reusable.service';

@Component({
  selector: 'lib-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.scss']
})
export class PipedemoComponent implements OnInit {

  rowData: Observable<any[]> = new Observable();
  constructor(private reusable: ReusableService) { }

  ngOnInit(): void {
    this.rowData = this.reusable.getList().pipe((map((data: any) => data.data)))
  }

}
