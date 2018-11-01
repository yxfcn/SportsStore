import { Injectable} from '@angular/core'
import { Observable} from 'rxjs';
import {Order} from './order.model';
import {StaticDataSource} from './static.datasource';

/**
 * 管理订单
 */
@Injectable()
export class OrderRepository{
   private orders:Order[]=[]; // 初始化为空的

   constructor(private dataSource: StaticDataSource){

   }

   /**
    * 获取所有订单
    */
   getOrders():Order[]{
       return this.orders;
   }

   /**
    * 
    * @param order 存储订单，返回订单的Observable
    */
   saveOrder(order:Order):Observable<Order>{
       return this.dataSource.saveOrder(order);
   }
}