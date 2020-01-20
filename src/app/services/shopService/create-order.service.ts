import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateOrderService {
    constructor(private firestore: AngularFirestore) { }

    createOrder(data) {
        return new Promise<any>((resolve, reject) => {
            const firestoreDoc = this.firestore.collection("my_products").ref.doc();
            data.id = firestoreDoc.id;
            firestoreDoc.set(data);
        });
    }
    
}
