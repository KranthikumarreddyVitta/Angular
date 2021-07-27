import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo :'moodboard',
    pathMatch:'full'
  },{
    path:'moodboard',
    loadChildren:()=>import('./../../../moodboard/src/lib/moodboard.module').then(m=>m.MoodboardModule)
  },{
    path:'quote',
    loadChildren:()=> import('./../../../quote/src/lib/quote.module').then(m=>m.QuoteModule)
  },{
    path:'order',
    loadChildren:()=> import('./../../../order/src/lib/order.module').then(m=>m.OrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
