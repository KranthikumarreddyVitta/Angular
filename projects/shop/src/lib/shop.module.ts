import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { shopRouting } from './shop.routing';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ZeroZeroSevenComponent } from './components/zero-zero-seven/zero-zero-seven.component';
import { ShopHomeComponent } from './components/shop-home/shop-home.component';
import { ShopCommonModule } from './common/shop-common.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ ZeroZeroSevenComponent, ShopHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(shopRouting),
    ShopCommonModule,
    MatCardModule
  ],
  exports: [],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class ShopModule {}
