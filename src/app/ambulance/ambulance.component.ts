import { Component, OnInit, TemplateRef } from '@angular/core';
import { AmbulanceService } from '../services/ambulanceService/ambulance.service';
import { MatDialog } from '@angular/material';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {
  ambulances = [];
  customeForm;
  searchText;
  image;
  name;
  address;
  mobile;
  userImg;
  imgUrl;
  search;
  constructor(private ambulanceService: AmbulanceService, private dialog: MatDialog, private fireStorage: AngularFireStorage) { }

  getAmbulance() {
  this.ambulanceService.getAmbulance().subscribe(res => {
    res.forEach(result => {
      this.ambulances.push(result.data());
    });
  });
  }
  ngOnInit() {
    this.getAmbulance();
  }

  onAddAmbulance(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  onEditAmbulance(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  onDeleteAmbulance(data) {
    const msg = confirm('Are You Sure you want to delete?');
    if (msg === true) {
    this.ambulanceService.deleteAmbulance(data.id);
    const index = this.ambulances.indexOf(data);
    this.ambulances.splice(index, 1);
    console.log(data.id);
    }
  }
  onImageSelect(img: any) {
    this.userImg = img.target.files[0];
  }
  onSubmit() {
    let nam = new Date().getTime();
    this.fireStorage
      .ref("ambulances/" + nam)
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
    this.ambulanceService.addAmbulance(data).then(res => {});
    if (data === null) {
      return;
    }
    this.ambulances.push(data);
    this.image = '';
    this.name = '';
    this.address = '';
    this.mobile = '';
}
onUpdate(data) {
  console.log(data);
  this.ambulanceService.editAmbulance(data);
  this.name = '';
  this.address = '';
  this.mobile = '';
}
// data = {
//   id: id,
//   name: this.name,
//   address: this.address,
//   contact: this.contact
// };
// if (data === '') {
//   return;
// } else{
//   console.log(data);
//   this.ambulanceService.editAmbulance(id, data);
// }
 // if(this.name === '' && this.address === '' && this.contact === '') {
  //   return;
  // }else{
  //   data = {
  //     id: id,
  //     name: this.name,
  //     address: this.address,
  //     contact: this.contact
  //   };
  //   console.log(data);
  //   this.ambulanceService.editAmbulance(id, data);
  // }

}
