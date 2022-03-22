import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  recipeInp = new FormControl(null, [Validators.required]);

  constructor(private _Router: Router) {}

  ngOnInit(): void {}
  updateRecipe() {
    this._Router.navigate(['/recipes', this.recipeInp.value]);
  }
}
