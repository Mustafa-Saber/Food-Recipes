import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './Component/authentication/authentication.component';
import { HomeComponent } from './Component/home/home.component';
import { RecipesComponent } from './Component/recipes/recipes.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { GridComponent } from './Component/recipes/grid/grid.component';
import { ListComponent } from './Component/recipes/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    RecipesComponent,
    NavbarComponent,
    NotFoundComponent,
    GridComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
