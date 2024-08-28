import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
// import { AuthGuard } from './shared/guards/auth-guard.guard';

const routes: Routes = [
  {path:'', component:HomeComponent}
  ,{path:'search', component:SearchComponent}
  ,{path:'movie/:id', component:MovieDetailsComponent}
  // ,{path:'movie/:id', component:MovieDetailsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
