import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: any;
  user = {username: "", password: ""};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    let user = localStorage.getItem("user");
    if(user != null || user != undefined) {
      this.router.navigate(["/home"]);
    }
  }

  login() {
    this.userService.adminLogin().subscribe(usrData => {
      if((usrData.data().username == this.user.username) && (usrData.data().password == this.user.password)) {
        localStorage.setItem("user", usrData.data().user_id);
        this.router.navigate(["/home"]);
      } else {
        this.msg = "Wrong username or password!";
      }
    });
  }
}