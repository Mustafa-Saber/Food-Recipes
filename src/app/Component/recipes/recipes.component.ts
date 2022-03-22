import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  rec: string = '';
  grid: boolean = true;
  list: boolean = false;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.rec = this._ActivatedRoute.snapshot.params['recipe'];
    this._Router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  gridView() {
    this.grid = true;
    this.list = false;
  }
  listView() {
    this.list = true;
    this.grid = false;
  }
}
