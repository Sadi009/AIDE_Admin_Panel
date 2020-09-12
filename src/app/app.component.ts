import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aide-Admin-panel';

  constructor(private route: Router) {
    let user = localStorage.getItem("user");
    if(user == null || user == undefined) {
      this.route.navigate(["/login"]);
    } else {
      this.route.navigate(["/home"]);
    }
  }

  signout() {
    if(window.confirm("You want to Logout?")) {
      localStorage.removeItem("user");
      this.route.navigate(["/login"]);
    }
  }
}