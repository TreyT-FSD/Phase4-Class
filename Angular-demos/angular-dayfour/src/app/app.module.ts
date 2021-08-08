import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
  declarations: [
    UsersComponent,
    HomeComponent,
    MainComponent,
    UserDetailComponent,
    UserAddComponent,
    PageNotFoundComponent,
    UserUpdateComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
