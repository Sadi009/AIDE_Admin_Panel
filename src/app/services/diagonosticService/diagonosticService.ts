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
      resolve(this.firestore.collection("diagonostic_center").doc(id).set({tests: name},{merge:true}));
    });
  }

  addTestDetails(id, name, data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("diagonostic_center").doc(id).get().subscribe(datas => {
        let test = datas.data().tests[name];
        test.push(data);

        resolve(this.firestore.collection("diagonostic_center").doc(id).update({[`tests.${name}`]: test}));
      });
    });
  }

  editTests(data) {
    let test_name = data.name;
    let index = data.index;
    let id = data.id;
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("diagonostic_center").doc(id).get().subscribe(datas => {
        let test = datas.data().tests[test_name];
        test[index] = data.data;

        this.firestore.collection("diagonostic_center").doc(id).update({[`tests.${test_name}`]: test});
      });
    });
  }

  deleteSubTest(id, name, index) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("diagonostic_center").doc(id).get().subscribe(datas => {
        let test = datas.data().tests[name];
        test.splice(index, 1);
        
        resolve(this.firestore.collection("diagonostic_center").doc(id).update({[`tests.${name}`]: test}));
      });
    });
  }
}
