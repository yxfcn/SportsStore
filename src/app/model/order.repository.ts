import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Order } from './order.model';
// import {StaticDataSource} from './static.datasource';
import { RestDataSource } from "./rest.datasource";

/**
 * 管理订单
 */
@Injectable()
export class OrderRepository {
    private orders: Order[] = []; // 初始化为空的
    private loaded: boolean = false;
    constructor(private dataSource: RestDataSource) {

    }

    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders()
            .subscribe(orders => this.orders = orders);
    }
    /**
     * 获取所有订单
     */
    getOrders(): Order[] {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }

    /**
     * 
     * @param order 存储订单，返回订单的Observable
     */
    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }
    updateOrder(order: Order) {
        this.dataSource.updateOrder(order).subscribe(order => {
            this.orders.splice(this.orders.
                findIndex(o => o.id == order.id), 1, order);
        });
    }
    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => id == o.id));
        });
    }
}