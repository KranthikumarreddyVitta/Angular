import { Routes } from "@angular/router";
import { OrderListComponent } from "./components/order-list/order-list.component";
import { OrderComponent } from "./components/order/order.component";

export const orderRouting : Routes = [{
    path:'',
    component:OrderListComponent
},{
    path:':id',
    component: OrderComponent
}]