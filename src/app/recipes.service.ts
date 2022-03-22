import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private _HttpClient: HttpClient) {}
  getFoodRecipes(foodType: string): Observable<any> {
    return this._HttpClient.get(
      `https://forkify-api.herokuapp.com/api/search?q=${foodType}`
    );
  }
}
