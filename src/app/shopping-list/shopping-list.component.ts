import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients :Ingredient[]=[
  new Ingredient('Apples',5),
  new Ingredient('cinammon Sticks',2)
];
  constructor() { }

  ngOnInit() {
  }

}