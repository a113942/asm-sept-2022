import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from './models';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  shoppingList: ShoppingListItem[] = [
    { description: 'Hairspray', purchased: false },
    { description: 'Beer', purchased: true },
  ];
  constructor() {}

  addItemToList(item: {description: string }) {
    const itemToAdd = {
      ...item,
      purchased: false,
    };
    this.shoppingList = [itemToAdd, ...this.shoppingList];
  }

}
