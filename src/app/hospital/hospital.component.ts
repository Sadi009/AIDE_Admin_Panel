import { Component, OnInit, TemplateRef } from '@angular/core';
import { HospitalService } from '../services/hospitalService/hospital.service';
import { MatDialog } from '@angular/material';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospitals = [];
  searchText;
  image;
  name;
  address;
  mobile;
  userImg;
  imgUrl;

  constructor(private hospitalService: HospitalService, private dialog: MatDialog, private fireStorage: AngularFireStorage) { }

  getHospital() {
    this.hospitalService.getHospital().subscribe(res => {
      res.forEach(result => {
        this.hospitals.push(result.data());
      });
    });
    }
    ngOnInit() {
      this.getHospital();
    }
    onAddHospital(templateRef: TemplateRef<any>) {
      this.dialog.open(templateRef);
    }
    onEditHospital(templateRef: TemplateRef<any>) {
      this.dialog.open(templateRef);
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
      image: this.imgUrl,
      name: this.name,
      address: this.address,
      mobile: this.mobile
    };
    console.log(data);
      this.hospitalService.addHospital(data).then(res => {});
      if (data === null) {
        return;
      }
      this.hospitals.push(data);
      this.image = '';
      this.name = '';
      this.address = '';
      this.mobile = '';
  }
  onUpdate(data) {
    console.log(data);
    this.hospitalService.editHospital(data);
    this.name = '';
    this.address = '';
    this.mobile = '';
  }
  onDeleteHospital(data) {
    this.hospitalService.deleteHospital(data.id);
    const index = this.hospitals.indexOf(data);
    this.hospitals.splice(index, 1);
    console.log(data.id);
  }

}
