import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class ShopService {

	constructor(private firestore: AngularFirestore) { }

	getShop(owner) {
		return this.firestore.collection("shops", ref => ref.where('owner', '==', owner).limit(2)).get();
	}

	addShop(data) {
		return new Promise<any>((resolve, reject) => {
			const firestoreDoc = this.firestore.collection("shops").ref.doc();
			data.id = firestoreDoc.id;
			firestoreDoc.set(data);
		});
	}

	editShop(data) {
		return this.firestore.collection('shops').doc(data.id).update(data);
	}

	deleteShop(data) {
		return this.firestore.collection("shops").doc(data).delete();
	}
}