import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderDetailsService {
  constructor(private firestore: AngularFirestore) { }

  getOrders() {
    return this.firestore.collection("orders").get();
  }
  getUser(id) {
    return this.firestore.collection("users", ref => ref.where('id', '==', id)).get();
  }
  getProducts(id) {
    return this.firestore.collection("products", ref => ref.where('id', '==', id)).get();
  }
}
