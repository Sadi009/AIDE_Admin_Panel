import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class DoctorListService {
  constructor(private firestore: AngularFirestore) { }
//  Doctors database
getDoctors() {
    return this.firestore.collection("users", ref => ref.where('type', '==', 'Doctor')).get();
  }
  addDoctor(data) {
    return new Promise<any>((resolve, reject) => {
      const firestoreDoc = this.firestore.collection("users").ref.doc();
      data.id = firestoreDoc.id;
      firestoreDoc.set(data);
    });
  }
  
  editDoctor(data){
    this.firestore.collection('users').doc(data.id).update(data);
  }
  deleteDoctor(data) {
    return this.firestore.collection("users").doc(data).delete();
  }
  // chambers database
  getChambers(id) {
    return this.firestore.collection("chambers", ref => ref.where('doctor_id', '==', id)).get();
  }
  addChamber(data) {
    return new Promise<any>((resolve, reject) => {
      const firestoreDoc = this.firestore.collection("chambers").ref.doc();
      data.id = firestoreDoc.id;
      firestoreDoc.set(data);
    });
  }
  
  editChamber(data){
    this.firestore.collection('chambers').doc(data.id).update(data);
  }
  deleteChamber(data) {
    return this.firestore.collection("chambers").doc(data).delete();
  }
}
