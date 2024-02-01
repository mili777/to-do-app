import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor() { }

 // @Input() allItems : any[] = [];
  valid = true;

  addItem(description: string) { 
    const id = Math.floor((Math.random() * 1000000) + 1);
    axios({
      method: 'post',
      url: 'http://localhost:3000/tasks',
      data: {
        id: `${id}`,
        description: description,
        done: false,
        owner_id: "1"
      }
    });
  }

  ngOnInit(): void {
  }

}
