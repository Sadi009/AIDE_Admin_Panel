import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyProductService {
  constructor(private firestore: AngularFirestore) { }

  getMyProduct() {
      return this.firestore.collection("my_products").get()
  }
  deleteMyProduct(data) {
    return this.firestore.collection("my_products").doc(data.id).delete();
  }
}
