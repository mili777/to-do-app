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
  
  allItems = [{description: "eat", done: true, owner: "1"}];

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

  filter: "0" | "1" = "0"
  
  get items() {
    // if(this.filter === "all") {
    //   return this.allItems
    // }
    return this.allItems.filter((item) =>
      this.filter === "1" ? item.done : !item.done
    )
  }
  
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
