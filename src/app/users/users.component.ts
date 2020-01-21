import { Component, OnInit, TemplateRef } from "@angular/core";
import { UserService } from "../services/userService/user.service";
import { MatDialog } from "@angular/material";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users = [];
  name;
  image;
  address;
  mobile;
  email;
  type;
  userImg;
  imgUrl;
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private fireStorage: AngularFireStorage
  ) { }

  getUsers() {
    this.userService.getUsers().subscribe(res => {
      res.forEach(result => {
        this.users.push(result.data());
      });
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  onOperDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  onImageSelect(img: any, user?: any) {
    // if (user) {
    //   this.userImg = img.target.files[0];
    //   let nam = new Date().getTime();
      
    //   this.fireStorage
    //     .ref("users/" + nam)
    //     .put(this.userImg)
    //     .then(res => {
    //       res.ref.getDownloadURL().then(url => {
    //         console.log(url);
    //         user.image = url;
    //         // this.onUploadToDatabase();
    //         this.userService.editUser(user);
    //       });
    //     });

    // } else {
    //   
    // }
    console.log(img);
    this.userImg = img.target.files[0];

  }
  onSubmit() {
    let nam = new Date().getTime();
    this.fireStorage
      .ref("users/" + nam)
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
      type: this.type,
      is_login: true,
      status: true,
      address: this.address,
      mobile: this.mobile,
      email: this.email
    };
    this.userService.addUser(data).then(res => { });
    if (data === null) {
      return;
    }
    this.users.push(data);
    this.name = "";
    this.address = "";
    this.mobile = "";
    this.email = "";
    this.type = "";
  }
  onUpdate(data) {
    console.log(data);
    this.userService.editUser(data);
    this.name = "";
    this.address = "";
    this.mobile = "";
    this.email = "";
    this.type = "";
  }

  onDeleteUser(data) {
    this.userService.deleteUser(data);
    const index = this.users.indexOf(data);
    this.users.splice(index, 1);
    console.log(data.id);
  }
}
