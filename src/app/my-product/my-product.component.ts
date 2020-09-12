import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from '../services/shopService/product-details.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CatagoryService } from '../services/shopService/catagory.service';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {
  @ViewChild('nav', null) slider: NgImageSliderComponent;
  catagories = [];
  products = [];
  search;

  constructor(
    private router: ActivatedRoute, 
    private productService: ProductDetailsService, 
    private dialog: MatDialog,
    private catagoryService: CatagoryService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.getMyProducts(params["id"]);
    });
    this.getAllCategory();
  }

  getMyProducts(id) {
    this.productService.getProducts(id).subscribe(res => {
      res.forEach(result => {
        this.products.push(result.data());
      });

      console.log(this.products);
    });
  }

  getAllCategory() {
    this.catagoryService.getCatagoryByModule("Shop").subscribe(res => {
      res.forEach(result => {
        this.catagories.push(result.data());
      });
    });
  }

  onOpenDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  onDelete(data) {
    if (confirm('Are You Sure you want to delete this product?')) {
      this.productService.deleteProduct(data.id).then(() => {
        const index = this.products.indexOf(data);
        this.products.splice(index, 1);
      }).catch(err => {
        console.log(err);
      });
    }
  }

  onProductUpdate(data) {
    console.log(data);
    this.productService.updateProduct(data).then(() => {
      this.openSnackBar("Updated", "Product Updated Success");
    }).catch(err => {
      this.openSnackBar("Error", "Product Update Failed");
    });
  }

  deSelect(product, name) {
    let id = this.products.indexOf(product);
    this.products[id][name] = false;
  }

  onImageSelect(product, name, img: any) {
    let id = this.products.indexOf(product);
    let file = img.target.files[0];
		let reader = new FileReader();
    reader.onload = (e: any) => {
      let fileData = e.target.result;
      let tempImg = fileData;
      this.products[id][name] = tempImg;
    };
    reader.readAsDataURL(file);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}