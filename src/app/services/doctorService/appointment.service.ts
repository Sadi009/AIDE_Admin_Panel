import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class AppointmentService {
  constructor(private firestore: AngularFirestore) { }

  getPatients() {
    return this.firestore.collection("appointments").get();
  }
  
  editPatient(data){
    this.firestore.collection('appointments').doc(data.id).update(data);
  }
}
