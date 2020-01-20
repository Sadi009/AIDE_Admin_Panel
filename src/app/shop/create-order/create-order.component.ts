import { Component, OnInit } from '@angular/core';
import { CreateOrderService } from 'src/app/services/shopService/create-order.service';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  name;
  catagory_name
  image;
  description;
  price;
  quantity;
  imgUrl;
  userImg;
  constructor(private createOrderService: CreateOrderService, private fireStorage: AngularFireStorage) { }

  ngOnInit() {
  }
  onImageSelect(img: any, user?: any) {
    console.log(img);
    this.userImg = img.target.files[0];

  }
  onSubmit() {
    let nam = new Date().getTime();
    this.fireStorage
      .ref("my_products/" + nam)
      .put(this.userImg)
      .then(res => {
        res.ref.getDownloadURL().then(url => {
          console.log(url);
          this.imgUrl = url;
          this.onUploadToDatabase();
        });
      });
  }
  onUploadToDatabase() {
    const data = {
      name: this.name,
      catagory_name: this.catagory_name,
      image: this.imgUrl,
      description: this.description,
      price: this.price,
      quantity: this.quantity
    };
    this.createOrderService.createOrder(data).then(res => { });
    if (data === null) {
      return;
    }
    this.name = "";
    this.image = "";
    this.catagory_name = "",
    this.description = "";
    this.price = "";
    this.quantity = "";
  }

}
