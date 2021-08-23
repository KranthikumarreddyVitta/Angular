import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private _dashboardService: DashboardService,
    private _router: Router
  ) {}
  dashboardData: any = null;
  tiles = [
    {
      text: 'Rest & Relaxation',
      cols: 2,
      rows: 1,
      color: 'lightblue',
      imgPath: '5450121',
    },
    {
      text: 'Apéritif',
      cols: 1,
      rows: 1,
      color: 'lightgreen',
      imgPath: '279648',
    },
    {
      text: 'Beach Retreat',
      cols: 1,
      rows: 2,
      color: 'lightpink',
      imgPath: '1374125',
    },
    {
      text: 'Sunlit Sunday',
      cols: 1,
      rows: 1,
      color: '#DDBDF1',
      imgPath: '3209045',
    },
    {
      text: 'Amuse-Bouche',
      cols: 2,
      rows: 1,
      color: '#DDBDF1',
      imgPath: '3209041',
    },
  ];
  ngOnInit(): void {
    this.getDashboardData();
  }

  getDashboardData() {
    this._dashboardService.getDashboardData().subscribe((data) => {
      this.dashboardData = data;
    });
  }

  gotoPage(route: string) {
    this._router.navigate([route]);
  }
}
