import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Name', 'Test desc', 'https://p1.pxfuel.com/preview/875/1023/589/potato-casserole-potatoes-cheese-gratin.jpg')
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
