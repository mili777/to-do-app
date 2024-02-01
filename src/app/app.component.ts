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

  usersDB = [
    {
      id: "1",
      username: "",
      password: "",
      admin: true
    },
    {
      id: "2",
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
