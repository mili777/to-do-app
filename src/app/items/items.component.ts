import { Component, Input, OnInit } from '@angular/core';
import { Item } from "../item";
import axios from 'axios';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  
  public constructor() { }

  private apiUrl = 'http://localhost:3000/tasks';
  
  allItems = [{id: "1", description: "eat", done: true, owner_id: "1"}];

  ngOnInit(): void {
    
    axios.get(this.apiUrl)
      .then(response => {
        this.allItems = response.data.map( task => {
          return task          
        })
      })
      .catch(error => {
        console.error(error);
      });
    }
  
  @Input() admin: any;

  //filter: "0" | "1" | "all" = "0"
  
  get items() {
    return this.allItems.filter((item) =>
      item.owner_id === "1"
    )
  }

  remove(item: Item) {
    console.log(item.id)
    axios.delete(`http://localhost:3000/tasks/${item.id}`)
      .then(response => {
        console.log(`Deleted post with ID ${item.id}`);
      })
      .catch(error => {
        console.error(error);
      });
    }
}
