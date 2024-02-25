import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import axios from 'axios';
import { addItems } from 'src/app/ItemsStore/items.actions';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private store: Store) { }

 // @Input() allItems : any[] = [];
  valid = true;

  addItem(description: string) { 
    
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3000/tasks',
    //   data: {
    //     id: `${id}`,
    //     description: description,
    //     done: false,
    //     owner_id: "1"
    //   }
    // });
    
    
  
    
  }

  id = Math.floor((Math.random() * 1000000) + 1)

  addItems(description: string) {
    this.store.dispatch(addItems({ 
      item: {id: this.id, 
    description: description, 
    done: false, 
    owner_id: 1 }}));
    console.log(this.store)
  }

  ngOnInit(): void {
  }

}
