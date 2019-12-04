import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes :Recipe[]=[
 new Recipe('A test Recipe','Simply a test recipe','https://www.shutterstock.com/image-photo/healthy-food-clean-eating-selection-fruit-722718082'),new Recipe('A test Recipe','Simply a test recipe','https://www.shutterstock.com/image-photo/healthy-food-clean-eating-selection-fruit-722718082')];
  constructor() { }

  ngOnInit() {
  }

}