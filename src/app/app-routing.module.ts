import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from "./store/store.module";
import { StoreFirstGuard } from "./storeFirst.guard";

import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";

const routes: Routes = [
  {
    path: "store",
    component: StoreComponent,
    canActivate: [StoreFirstGuard]
  },
  { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
  { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
  
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule",
    canActivate: [StoreFirstGuard]
    },
    { path: "**", redirectTo: "/store" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), StoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
