import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailsService {

	constructor(private firestore: AngularFirestore) { }

	createProduct(data) {
		let doc = this.firestore.collection("products").ref.doc();
		data["id"] = doc.id;

		return doc.set(data);
	}

	getProducts(id) {
		return this.firestore.collection("products", ref => ref.where('shop', '==', id)).get();
	}

	updateProduct(data) {
		return this.firestore.collection("products").doc(data.id).update(data);
	}

	deleteProduct(id) {
		return this.firestore.collection("products").doc(id).delete();
	}
}