import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DiagonosticService } from '../services/diagonosticService/diagonosticService';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-diagonostic-center',
  templateUrl: './diagonostic-center.component.html',
  styleUrls: ['./diagonostic-center.component.css']
})
export class DiagonosticCenterComponent implements OnInit {
  diagonostic_center_List = [];
  name;
  image;
  address;
  contact;
  userImg;
  imgUrl;
  search;
  constructor(private dialog: MatDialog, 
    private diagonosticService: DiagonosticService,
    private fireStorage: AngularFireStorage) { }

  getDiagonosticCenters() {
    this.diagonosticService.getDiagonosticCenters().subscribe(res => {
      res.forEach(result => {
        this.diagonostic_center_List.push(result.data());
      });
    });
  }
  ngOnInit() {
    this.getDiagonosticCenters();
  }
  onOpenModel(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  onImageSelect(img: any) {
    console.log(img);
    this.userImg = img.target.files[0];

  }
  onUploadToDatabase() {
    const data = {
      name: this.name,
      image: this.imgUrl,
      address: this.address,
      contact: this.contact
    };
    this.diagonosticService.addDiagonosticCenter(data).then(res => { });
    if (data === null) {
      return;
    }
    this.diagonostic_center_List.push(data);
    this.name = "";
    this.address = "";
    this.contact = "";
    this.image = "";
  }
  onSubmit() {
    let nam = new Date().getTime();
    this.fireStorage
      .ref("diagnosticCenter/" + nam)
      .put(this.userImg)
      .then(res => {
        res.ref.getDownloadURL().then(url => {
          console.log(url);
          this.imgUrl = url;
          this.onUploadToDatabase();
        });
      });
  }
  onUpdate(data) {
    console.log(data);
    this.diagonosticService.editDiagonosticCenter(data);
    this.name = "";
    this.address = "";
    this.contact = "";
  }
  onDeleteDiagnosticCenter(data) {
    const msg = confirm('Are You Sure you want to delete?');
    if (msg === true) {
    this.diagonosticService.deleteDiagonosticCenter(data);
    const index = this.diagonostic_center_List.indexOf(data);
    this.diagonostic_center_List.splice(index, 1);
    }
  }
}
