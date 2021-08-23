import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { dashboardRouting } from './dashboard.routing';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(dashboardRouting),
    MatGridListModule,
    MatButtonModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
