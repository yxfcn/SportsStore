import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { Cart } from "./cart.model";


import { AuthService } from "./auth.service";
@NgModule({
    imports: [HttpClientModule],
    providers: [
        ProductRepository, 
       // StaticDataSource,
        Cart,
        Order,
        OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource },
        RestDataSource,
        AuthService
    ]
})
export class ModelModule { }