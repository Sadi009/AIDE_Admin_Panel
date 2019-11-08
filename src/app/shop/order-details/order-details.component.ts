import { Component, OnInit, TemplateRef } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ProductDetailsService, PeriodicElement } from 'src/app/services/shopService/product-details.service';
import { OrderDetailsService } from 'src/app/services/shopService/order-details.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrderDetailsComponent implements OnInit {
  orders;
  products;
  productsArr = [];
  columnsToDisplay = ['id', 'name', 'price', 'quantity'];
  expandedElement: PeriodicElement | null;

  constructor(private orderService: OrderDetailsService, private productDetailService: ProductDetailsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.orders = this.orderService.orders;
    // this.shop2 = new MatTableDataSource(this.shopService.ELEMENT_DATA_2);
    // this.products = new MatTableDataSource(this.productDetailService.products);
  }

  applyFilter(filterValue: string) {
    this.products.filter = filterValue.trim().toLowerCase();
  }
  onDelete(index: number) {
    const data = this.orders.data;
    data.splice(index, 1);

    this.orders.data = data;
  }
  onEdit(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  onDetail(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  getProducts(id) {
    this.productsArr = [];
    const order = this.orderService.orders;
    order.forEach(res => {
      if (res.id === id) {
        res.orderedProduct.forEach(product => {
          const ProductID = product.id;
          const productList = this.productDetailService.products;

          productList.forEach(prod => {
            if (prod.id === ProductID) {
              this.productsArr.push(prod);
            }
          });
        });
        this.products = new MatTableDataSource(this.productsArr);
      }
    });
  }

}
