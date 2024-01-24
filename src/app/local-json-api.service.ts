import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class LocalJsonApiService {

  constructor() { }

  getTasks() {
    return axios.get('http://localhost:3000/tasks', {
    });
  }
}
