import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SortDirective } from '../../directives/sort.directive';
import { SortEvent, Table } from '../../interfaces/table';

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChildren(SortDirective)
  headers!: QueryList<SortDirective>;

  countries: Table[] = [
    {
      name: 'Russia',
      flag: 'Red',
      area: 17075200,
      population: 146989754
    },
    {
      name: 'Canada',
      flag: 'Red',
      area: 9976140,
      population: 36624199
    },
    {
      name: 'United States',
      flag: 'Red',
      area: 9629091,
      population: 324459463
    },
    {
      name: 'China',
      flag: 'Red',
      area: 9596960,
      population: 1409517397
    }
  ]

  list = this.countries.slice()

  constructor() { }

  ngOnInit(): void {
  }

  onSort({ column, direction }: SortEvent) {

    // resetting other headers

    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.list = this.countries.slice();
    } else {
      this.list = [...this.countries].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

}
