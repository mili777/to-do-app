import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  constructor() { }

  @Input() admin: any;
  @Input() editable: any;
  @Input() item!: Item;

  saveItem(description: string) {
    this.item.description = description;
  }

  ngOnInit(): void {
  }

}
