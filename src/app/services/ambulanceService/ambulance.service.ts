import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class AmbulanceService {
  constructor(private firestore: AngularFirestore) { }

  getAmbulance() {
    return this.firestore.collection("ambulance").get();
  }
  addAmbulance(data) {
    return new Promise<any>((resolve, reject) => {
      const firestoreDoc = this.firestore.collection("ambulance").ref.doc();
      data.id = firestoreDoc.id;
      firestoreDoc.set(data);
    });
  }
  
  editAmbulance(data){
    this.firestore.collection('ambulance').doc(data.id).update(data);
  }
  deleteAmbulance(data) {
    return this.firestore.collection("ambulance").doc(data).delete();
  }
}
