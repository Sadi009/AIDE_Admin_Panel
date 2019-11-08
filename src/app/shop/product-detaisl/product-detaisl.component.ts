import { Component, OnInit, TemplateRef } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ShopService } from 'src/app/services/shopService/shop.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ProductDetailsService, PeriodicElement } from 'src/app/services/shopService/product-details.service';

@Component({
  selector: 'app-product-detaisl',
  templateUrl: './product-detaisl.component.html',
  styleUrls: ['./product-detaisl.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductDetaislComponent implements OnInit {
  shops;
  products;
  productsArr = [];
  columnsToDisplay = ['id', 'name', 'price'];
  expandedElement: PeriodicElement | null;

  constructor(private shopService: ShopService, private productDetailService: ProductDetailsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.shops = this.shopService.shops;
    // this.shop2 = new MatTableDataSource(this.shopService.ELEMENT_DATA_2);
    // this.products = new MatTableDataSource(this.productDetailService.products);
  }

  applyFilter(filterValue: string) {
    this.products.filter = filterValue.trim().toLowerCase();
  }
  onDelete(index: number) {
    const data = this.shops.data;
    data.splice(index, 1);

    this.shops.data = data;
  }
  onEdit(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  onDetail(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  getProducts(id) {
    this.productsArr = [];
    const shop = this.shopService.shops;
    shop.forEach(res => {
      if (res.id === id) {
        res.products.forEach(product => {
          const productId = product.id;
          const productList = this.productDetailService.products;

          productList.forEach(prod => {
            if (prod.id === productId) {
              this.productsArr.push(prod);
            }
          });
        });
      }
    });

    this.products = new MatTableDataSource(this.productsArr);
  }
}
