import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'To-Do-App';
  loggedIn;
  admin;

  users = [
    {
      username: "sladjan",
      password: "sladjan123",
      admin: true
    },
    {
      username: "john",
      password: "john1234",
      admin: false
    }
  ]


  onLogin(login) {
    this.loggedIn = login;
  }

  onAdmin(admin) {
    this.admin = admin;
  }

}
