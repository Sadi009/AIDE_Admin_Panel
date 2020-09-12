import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class CatagoryService {

    constructor(private firestore: AngularFirestore) { }

    addCatagory(data) {
        const firestoreDoc = this.firestore.collection("category").ref.doc();
        data.id = firestoreDoc.id;
        return firestoreDoc.set(data);
    }

    getCatagory() {
        return this.firestore.collection("category").get();
    }

    getCatagoryByModule(name) {
        return this.firestore.collection("category", ref => ref.where("module", "==", name)).get();
    }

    editCatagroy(data) {
        this.firestore.collection('category').doc(data.id).update(data);
    }

    deleteCatagroy(data) {
        return this.firestore.collection("category").doc(data).delete();
    }
}
