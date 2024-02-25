import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addID, getName } from '../user.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<any>,private _router : Router) {
  }
   
  
  addID(id: number) {
    this.store.dispatch(addID({ id }));
  }

  getName(name: string) {
    this.store.dispatch(getName({ name }));
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
        this.getName(user.username)
        this.addID(user.id)
        
      }
    });
  }

  ngOnInit(): void {
  }

}
