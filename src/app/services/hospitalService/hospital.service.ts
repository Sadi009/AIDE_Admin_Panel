import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  constructor(private firestore: AngularFirestore) { }

  getHospital() {
    return this.firestore.collection("hospital").get();
  }
  addHospital(data) {
    return new Promise<any>((resolve, reject) => {
      const firestoreDoc = this.firestore.collection("hospital").ref.doc();
      data.id = firestoreDoc.id;
      firestoreDoc.set(data);
    });
  }
  editHospital(data){
    this.firestore.collection('hospital').doc(data.id).update(data);
  }
  deleteHospital(data) {
    return this.firestore.collection("hospital").doc(data).delete();
  }
}
