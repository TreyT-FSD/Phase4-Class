import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    UsersComponent,
    HomeComponent,
    MainComponent,
    UserDetailComponent,
    UserAddComponent,
    PageNotFoundComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
