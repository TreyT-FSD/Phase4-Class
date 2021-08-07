import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { applicationRoutes } from './app-routing.module';
import { ServiceComponent } from './service/service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeServiceComponent } from './employee-service/employee-service.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [  //app component files where deleted so we also delete the declaration
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    PageNotFoundComponent,
    EmployeeServiceComponent,
    CustomerServiceComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes)    //allows configuration of routes in the application
  ],
  providers: [],
  bootstrap: [MainComponent]  //configure the new main component as the starting point of our app
})
export class AppModule { }
