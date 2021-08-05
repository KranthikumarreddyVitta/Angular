import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'projects/core/src/lib/guard/authentication.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo :'moodboard',
    pathMatch:'full'
  },{
    canActivate: [AuthenticationGuard],
    path:'moodboard',
    loadChildren:()=>import('./../../../moodboard/src/lib/moodboard.module').then(m=>m.MoodboardModule)
  },{
    canActivate: [AuthenticationGuard],
    path:'quote',
    loadChildren:()=> import('./../../../quote/src/lib/quote.module').then(m=>m.QuoteModule)
  },{
    canActivate: [AuthenticationGuard],
    path:'order',
    loadChildren:()=> import('./../../../order/src/lib/order.module').then(m=>m.OrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
