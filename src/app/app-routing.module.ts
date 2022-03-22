import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './Component/authentication/authentication.component';
import { HomeComponent } from './Component/home/home.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { RecipesComponent } from './Component/recipes/recipes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes/:recipe', component: RecipesComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
