import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  @Input() allItems : any[] = [];
  valid = true;

  addItem(description: string) {
    if (description.length > 4) {
      this.allItems.unshift({
        description,
        done: false
      })
      this.valid = true;
    } else {
      this.valid = false;
    }
    
  }

  ngOnInit(): void {
  }

}
