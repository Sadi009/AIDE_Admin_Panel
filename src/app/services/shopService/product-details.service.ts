
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailsService {
  constructor(private firestore: AngularFirestore) { }
  // product database 
 

  // product database 
  getProducts(id) {
    console.log(id);
    return this.firestore.collection("products", ref => ref.where('shop_id', '==', id)).get();
  }
}
