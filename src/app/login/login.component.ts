import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private store: Store<AppState>, private _router : Router) {
    this.users = this.store.select(state => state.user);
   }

  @Input() usersDB;
  @Output() onLogin = new EventEmitter<any>();
  @Output() onAdmin = new EventEmitter<any>();

  login(username, password) {

    this.usersDB.forEach(user => {
      if(user.username === username && user.password === password) {
        this.onLogin.emit(true);
        this.onAdmin.emit(user.admin);
        this._router.navigateByUrl('/dashboard');
        this.store.dispatch({
          type: 'ADD_USER',
          payload: <User> {
            username: user.username,
            admin: user.admin
          }
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
