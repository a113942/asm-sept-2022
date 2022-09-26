import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() model: ShoppingListItem[] = [];

  constructor() { }

  markPurchased(item: ShoppingListItem){
    item.purchased = true;
  }
}
