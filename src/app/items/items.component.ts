import { Component, Input, OnInit } from '@angular/core';
import { Item } from "../item";


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  @Input() admin: any;

  filter: "all" | "active" | "done" = "all"

  allItems = [
    {description: "eat", done: true},
    {description: "sleep", done: false},
    {description: "play", done: false}
  ]
  
  get items() {
    if(this.filter === "all") {
      return this.allItems
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    )
  }
  
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  ngOnInit(): void {
  }

}
