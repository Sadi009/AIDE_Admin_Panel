import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class DiagonosticService {
  constructor(private firestore: AngularFirestore) { }

  getDiagonosticCenters() {
    return this.firestore.collection("diagonostic_center").get();
  }
  addDiagonosticCenter(data) {
    return new Promise<any>((resolve, reject) => {
      const firestoreDoc = this.firestore.collection("diagonostic_center").ref.doc();
      data.id = firestoreDoc.id;
      firestoreDoc.set(data);
    });
  }

  editDiagonosticCenter(data) {
    this.firestore.collection('diagonostic_center').doc(data.id).update(data);
  }
  deleteDiagonosticCenter(data) {
    return this.firestore.collection("diagonostic_center").doc(data.id).delete();
  }

  getDiagonosticCentersDetails(id) {
    return this.firestore.collection("diagonostic_center").doc(id).get();
  }
  addTestName(id, name) {
    return new Promise<any>((resolve, reject) => {
      return this.firestore.collection("diagonostic_center").doc(id).set({tests: name},{merge:true});
    });
  }
  addTestDetails(id, name, data) {
    
    return new Promise<any>((resolve, reject) => {
      return this.firestore.collection("diagonostic_center").doc(id).update({[`tests.${name}`]: data});
    });
  }
}
