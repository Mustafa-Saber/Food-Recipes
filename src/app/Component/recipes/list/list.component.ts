import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipesService } from './../../../recipes.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  foodType: string = '';
  errorr: any;
  foodRecipe: any;
  constructor(
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _RecipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.foodType = this._ActivatedRoute.snapshot.params['recipe'];
    this._RecipesService.getFoodRecipes(this.foodType).subscribe(
      (data) => {
        this.foodRecipe = data.recipes;
      },
      (err) => {
        this.errorr = err;
      }
    );
  }
}
