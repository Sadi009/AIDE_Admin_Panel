import { Component, OnInit } from '@angular/core';
import { CatagoryService } from 'src/app/services/shopService/catagory.service';
import { ProductDetailsService } from 'src/app/services/shopService/product-details.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  catagories = [];
  imgArray = [];
  images = {
    img1: false,
    img2: false,
    img3: false
  }

  product = {name: "", price: "", description: "", best_sell: false, featured: false, trending: false};

  constructor(
    private catagoryService: CatagoryService,
    private productService: ProductDetailsService,
    private _snackBar: MatSnackBar
  ) {}

  getCatagory() {
    this.catagoryService.getCatagoryByModule("Shop").subscribe(res => {
      res.forEach(result => {
        this.catagories.push(result.data());
      });
    });
  }

  ngOnInit() {
    this.getCatagory();
  }

  onImageSelect(name, img: any) {
    let file = img.target.files[0];
		let reader = new FileReader();
    reader.onload = (e: any) => {
      let fileData = e.target.result;
      let tempImg = fileData;
      this.product[name] = tempImg;
      this.images[`${name}`] = true;
    };
    reader.readAsDataURL(file);
  }

  deSelect(name) {
    this.images[`${name}`] = false;
    delete this.product[name];
  }

  onSubmit() {
    this.product["created"] = new Date().toLocaleDateString();
    this.product["shop"] = "shop_123456";

    console.log(this.product);
    this.productService.createProduct(this.product).then(() => {
      this.openSnackBar("Created", "Product Created Success");
    }).catch(err => {
      this.openSnackBar("Failed", "Product Created Falied");
    });

    this.reset();
  }

  reset() {
    this.product = {name: "", price: "", description: "", best_sell: false, featured: false, trending: false};
    this.images = {
      img1: false,
      img2: false,
      img3: false
    }

    if(this.product.hasOwnProperty("img1")) {
      delete this.product["img1"];
    }

    if(this.product.hasOwnProperty("img2")) {
      delete this.product["img2"];
    }

    if(this.product.hasOwnProperty("img3")) {
      delete this.product["img3"];
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}