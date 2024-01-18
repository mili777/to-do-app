import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  @Input() users;
  @Output() onLogin = new EventEmitter<any>();
  @Output() onAdmin = new EventEmitter<any>();

  login(username, password) {

    this.users.forEach(user => {
      if(user.username === username && user.password === password) {
        this.onLogin.emit(true);
        this.onAdmin.emit(user.admin);
      }
    });
  }

  ngOnInit(): void {
  }

}
