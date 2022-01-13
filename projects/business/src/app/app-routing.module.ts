import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'projects/core/src/lib/components/login/login.component';
import { SignupComponent } from 'projects/core/src/lib/components/signup/signup.component';
import { AuthenticationGuard } from 'projects/core/src/lib/guard/authentication.guard';
import { InternalUserGuard } from 'projects/core/src/lib/guard/internal-user.guard';
import { ExtuserComponent } from 'projects/core/src/public-api';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'business',
    component: LandingComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./../../../dashboard/src/lib/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        canActivate: [AuthenticationGuard],
        path: 'moodboard',
        loadChildren: () =>
          import('./../../../moodboard/src/lib/moodboard.module').then(
            (m) => m.MoodboardModule
          ),
      },
      {
        canActivate: [AuthenticationGuard],
        path: 'quote',
        loadChildren: () =>
          import('./../../../quote/src/lib/quote.module').then(
            (m) => m.QuoteModule
          ),
      },
      {
        canActivate: [AuthenticationGuard],
        path: 'order',
        loadChildren: () =>
          import('./../../../order/src/lib/order.module').then(
            (m) => m.OrderModule
          ),
      },
      {
        canActivate: [AuthenticationGuard],
        path: 'shop',
        loadChildren: () =>
          import('./../../../shop/src/lib/shop.module').then((m) => m.ShopModule),
      }, 
      {
        canActivate: [AuthenticationGuard],
        path: 'cart',
        loadChildren: () =>
          import('./../../../cart/src/lib/cart.module').then((m) => m.CartModule)
      },
      {
        canActivate: [AuthenticationGuard, InternalUserGuard],
        path: 'extusers',
        component: ExtuserComponent
      },
      
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  }, 
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./../../../home/src/lib/home.module').then((m) => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
