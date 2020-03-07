import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ProductDetailsService } from 'src/app/services/shopService/product-details.service';
import { OrderDetailsService } from 'src/app/services/shopService/order-details.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  orders = [];
  users;
  products;
  productsArr = [];
  user_id;
  product_id;
  search;

  constructor(private orderService: OrderDetailsService, private productDetailService: ProductDetailsService) { }
  getOrders() {
    this.orderService.getOrders().subscribe(res => {
      res.forEach(result => {
        this.orders.push(result.data());
      });
    });
  }
  ngOnInit() {
    // this.orders = this.orderService.orders;
    this.getOrders();

  }

  onExpansion(id) {
    this.users = [];
    this.getUser(id);
    this.user_id = id;

  }
  onExpansion1(id) {
    this.products = [];
    this.getProduct(id);
    this.product_id = id;

  }

  getUser(id) {
    this.orderService.getUser(id).subscribe(res => {
      res.forEach(result => {
        this.users.push(result.data());
      });
    });
    }
    getProduct(id) {
      console.log(id);
      this.orderService.getProducts(id).subscribe(res => {
        res.forEach(result => {
          this.products.push(result.data());
        });
      });
      }


//  Extra 


  // getProducts(id) {
  //   this.productsArr = [];
  //   const order = this.orderService.orders;
  //   order.forEach(res => {
  //     if (res.id === id) {
  //       res.orderedProduct.forEach(product => {
  //         const ProductID = product.id;
  //         const productList = this.productDetailService.products;

  //         productList.forEach(prod => {
  //           if (prod.id === ProductID) {
  //             this.productsArr.push(prod);
  //           }
  //         });
  //       });
  //       this.products = new MatTableDataSource(this.productsArr);
  //     }
  //   });
  // }

}
