import { Component, Input, OnInit } from '@angular/core';
import { Item } from "../item";
import axios from 'axios';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectItem, selectDoubleItem } from '../ItemsStore/items.selectors'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  id$: Observable<number>;
  name$: Observable<string>;
  items$: Observable<Item[]> = this.store.select(state => state.items);
  selectItem$: Observable<any>;
  selectDoubleItem$: Observable<any>;

  public constructor(private store: Store<{id: number, name: string, items: Item[], item: Item} >) {
    this.id$ = store.select('id');
    this.name$ = store.select('name');
    this.id$.subscribe(id => this.userId = id);
    this.selectItem$ = store.select(selectItem)
    this.selectDoubleItem$ = store.select(selectDoubleItem)
   }
   userId: number | undefined
   

  private apiUrl = 'http://localhost:3000/tasks';
  
  allItems = [{id: 1, description: "eat", done: true, owner_id: 1}];

  getAll() {
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

  ngOnInit() {
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
      item.owner_id == this.userId
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
