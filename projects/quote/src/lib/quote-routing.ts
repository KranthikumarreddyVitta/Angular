import { Routes } from "@angular/router";
import { QuoteListComponent } from "./components/quote-list/quote-list.component";
import { QuoteComponent } from "./components/quote/quote.component";

export const quoteRoute : Routes = [
    {
        path:'',
        component:QuoteListComponent
    },
    {
        path:':id',
        component:QuoteComponent
    }
]