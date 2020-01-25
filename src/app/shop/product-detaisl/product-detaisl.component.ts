import { Component, OnInit, TemplateRef } from '@angular/core';
import { ShopService } from 'src/app/services/shopService/shop.service';
import {  MatDialog } from '@angular/material';
import { ProductDetailsService } from 'src/app/services/shopService/product-details.service';

@Component({
  selector: 'app-product-detaisl',
  templateUrl: './product-detaisl.component.html',
  styleUrls: ['./product-detaisl.component.css'],
})
export class ProductDetaislComponent implements OnInit {
  shops = [];
  products;
  name;
  address;
  contact;
  shop_id

  constructor(private shopService: ShopService, private productDetailService: ProductDetailsService, private dialog: MatDialog) { }

  getShops() {
    this.shopService.getShop().subscribe(res => {
      res.forEach(result => {
        this.shops.push(result.data());
      });
    });

  }
  ngOnInit() {
    // this.shops = this.shopService.shops;                                                                                                                                                           
    this.getShops();
    // this.shop2 = new MatTableDataSource(this.shopService.ELEMENT_DATA_2);
    // this.products = new MatTableDataSource(this.productDetailService.products);
  }
  onSubmit() {
    const data = {
      name: this.name,
      type: 'Shop Owner',
      is_login: true,
      status: true,
      address: this.address,
      contact: this.contact,
    };
    this.shopService.addShop(data).then(res => { });
    if (data === null) {
      return;
    }
    this.shops.push(data);
    this.name = "";
    this.address = "";
    this.contact = "";
  }
  onUpdate(data) {
    console.log(data);
    this.shopService.editShop(data);
    this.name = "";
    this.address = "";
    this.contact = "";
  }
  onDeleteShop(data) {
    this.shopService.deleteShop(data.id);
    const index = this.shops.indexOf(data);
    this.shops.splice(index, 1);
    console.log(data.id);
  }

  applyFilter(filterValue: string) {
    // this.products.filter = filterValue.trim().toLowerCase();
  }
  // onDelete(index: number) {
  //   const data = this.shops.data;
  //   data.splice(index, 1);

  //   this.shops.data = data;
  // }
  onOpenDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  //  Product 
  onExpansion(id) {
    this.products = [];
    this.getProducts(id);
    this.shop_id = id;

  }
  getProducts(id) {
    this.productDetailService.getProducts(id).subscribe(res => {
      res.forEach(result => {
        this.products.push(result.data());
      });
    });
    }

  // getProducts(id) {
  //   this.productsArr = [];
  //   const shop = this.shopService.shops;
  //   shop.forEach(res => {
  //     if (res.id === id) {
  //       res.products.forEach(product => {
  //         const productId = product.id;
  //         const productList = this.productDetailService.products;

  //         productList.forEach(prod => {
  //           if (prod.id === productId) {
  //             this.productsArr.push(prod);
  //           }
  //         });
  //       });
  //     }
  //   });
  //   this.products = new MatTableDataSource(this.productsArr);
  // }
}
