import { Component, OnInit, TemplateRef } from '@angular/core';
import { DoctorListService } from 'src/app/services/doctorService/doctor-list.service';
import { MatDialog } from '@angular/material';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors = [];
  chambers = [];
  name;
  image;
  address;
  description;
  chamberName;
  chamberAdderss;
  mobile;
  email;
  schedule;
  time;
  doctor_id;
  userImg;
  imgUrl;
  search;

  constructor(private doctorListService: DoctorListService, private dialog: MatDialog, private fireStorage: AngularFireStorage) { }

  ngOnInit() {
    // this.doctors = this.doctorListService.doctors;
    this.getDoctors();
    // this.getChamber();
  }
  onOperDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  getDoctors() {
    this.doctorListService.getDoctors().subscribe(res => {
      res.forEach(result => {
        this.doctors.push(result.data());
      });
    });
  }
  onImageSelect(img: any) {
    this.userImg = img.target.files[0];
  }
  onSubmit() {
    let nam = new Date().getTime();
    this.fireStorage
      .ref("hospitals/" + nam)
      .put(this.userImg)
      .then(res => {
        res.ref.getDownloadURL().then(url => {
          console.log(url);
          this.imgUrl = url;
          this.onUploadToDatabase();
        });
      });
  }
  onUploadToDatabase() {
    const data = {
      name: this.name,
      image: this.imgUrl,
      type: 'Doctor',
      is_login: true,
      status: true,
      address: this.address,
      description: this.description,
    };
    console.log(this.address);
    this.doctorListService.addDoctor(data).then(res => { });
    if (data === null) {
      return;
    }
    this.doctors.push(data);
    this.name = '';
    this.address = '';
    this.description = '';
  }
  onUpdate(data) {
    console.log(data);
    this.doctorListService.editDoctor(data);
    this.name = '';
    this.address = '';
    this.mobile = '';
    this.email = '';
  }
  onDeleteDoctor(data) {
    const msg = confirm('Are You Sure you want to delete?');
    if (msg === true) {
      this.doctorListService.deleteDoctor(data.id);
      const index = this.doctors.indexOf(data);
      this.doctors.splice(index, 1);
      console.log(data.id);
    }
  }
  //  Chambers
  onExpansion(id) {
    this.chambers = [];
    this.getChambers(id);
    this.doctor_id = id;

  }
  getChambers(id) {
    this.doctorListService.getChambers(id).subscribe(res => {
      res.forEach(result => {
        this.chambers.push(result.data());
      });
    });
  }

  onSubmitChamber() {
    const data = {
      chamberName: this.chamberName,
      is_login: true,
      status: true,
      chamberAddress: this.chamberAdderss,
      mobile: this.mobile,
      schedule: this.schedule,
      time: this.time,
      doctor_id: this.doctor_id
    };
    this.doctorListService.addChamber(data).then(res => { });
    if (data === null) {
      return;
    }
    this.chambers.push(data);
    this.chamberName = '';
    this.chamberAdderss = '';
    this.mobile = '';
    this.schedule = '';
    this.time = '';
  }

  onUpdateChamber(data) {
    console.log(data);
    this.doctorListService.editChamber(data);
    this.chamberName = '';
    this.chamberAdderss = '';
    this.mobile = '';
    this.schedule = '';
    this.time = '';
  }
  onDeleteChamber(data) {
    const msg = confirm('Are You Sure you want to delete?');
    if (msg === true) {
      this.doctorListService.deleteChamber(data.id);
      const index = this.chambers.indexOf(data);
      this.chambers.splice(index, 1);
      console.log(data.id);
    }
  }

  // getChamber(id) {
  //   const doctor = this.doctorListService.doctors;
  //   doctor.forEach(res => {
  //     if (res.id === id) {
  //       this.chambers = res.chambers;
  //     }
  //   });
  // }

}
