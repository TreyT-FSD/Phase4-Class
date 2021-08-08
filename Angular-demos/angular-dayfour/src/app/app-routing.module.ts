import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'user-detail/:id', component: UserDetailComponent},
  { path: 'user-add', component: UserAddComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
