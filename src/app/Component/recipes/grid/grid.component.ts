import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  foodType: string = '';
  error: any;
  foodRecipes: any[] = [];
  constructor(
    private _RecipesService: RecipesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.foodType = this._ActivatedRoute.snapshot.params['recipe'];
    this._RecipesService.getFoodRecipes(this.foodType).subscribe(
      (res) => {
        this.foodRecipes = res.recipes;
      },
      (error) => {
        this.error = error.error;
      }
    );
  }
}
