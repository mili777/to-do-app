import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent {

  editable = false;

  @Input() item!: Item;
  @Input() admin: any;
  @Output() remove = new EventEmitter<Item>();

}
