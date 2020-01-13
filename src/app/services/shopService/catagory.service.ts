import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class CatagoryService {
    constructor(private firestore: AngularFirestore) { }

    getCatagory() {
        console.log('hello')
        return this.firestore.collection("catagory").get();
    }
    addCatagory(data) {
        return new Promise<any>((resolve, reject) => {
            const firestoreDoc = this.firestore.collection("catagory").ref.doc();
            data.id = firestoreDoc.id;
            firestoreDoc.set(data);
        });
    }

    editCatagroy(data) {
        this.firestore.collection('catagory').doc(data.id).update(data);
    }
    deleteCatagroy(data) {
        return this.firestore.collection("catagory").doc(data).delete();
    }
}
