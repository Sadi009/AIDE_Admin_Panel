import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection("users").get();
  }
  addUser(data) {
    return new Promise<any>((resolve, reject) => {
      const firestoreDoc = this.firestore.collection("users").ref.doc();
      data.id = firestoreDoc.id;
      firestoreDoc.set(data);
    });
  }

  editUser(data) {
    this.firestore.collection('users').doc(data.id).update(data);
  }
  deleteUser(data) {
    return this.firestore.collection("users").doc(data.id).delete();
  }
}
