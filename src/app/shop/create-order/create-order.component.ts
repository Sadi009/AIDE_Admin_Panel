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
  imgArray = [];
  constructor(private createOrderService: CreateOrderService, private fireStorage: AngularFireStorage) { }

  ngOnInit() {
  }
  onImageSelect(img: any, user?: any) {
    console.log(img);
    this.imgArray.push(...img.target.files);
    console.log(this.imgArray);
  }
  onSubmit() {
    let multiImg = [];
    for (let i = 0; i < this.imgArray.length; i++) {
      let nam = new Date().getTime();
      this.fireStorage
      .ref("my_products/" + nam)
      .put(this.imgArray[i])
      .then(res => {
        res.ref.getDownloadURL().then(url => {
          console.log(url);
          multiImg.push(url);
          if(i == (this.imgArray.length - 1)) {
            this.onUploadToDatabase(multiImg);
          }
          
        });
      });
    }
    
  }
  onUploadToDatabase(multiImage) {
    const data = {
      name: this.name,
      catagory_name: this.catagory_name,
      description: this.description,
      price: this.price,
      quantity: this.quantity,
      imageUrls: multiImage
    };
    if (data === null) {
      return;
    }
    this.createOrderService.createOrder(data).then(res => { });
    
    this.name = "";
    this.image = "";
    this.catagory_name = "",
    this.description = "";
    this.price = "";
    this.quantity = "";
  }

}
