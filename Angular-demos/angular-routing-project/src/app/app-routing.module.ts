import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CustomerServiceComponent } from "./customer-service/customer-service.component";
import { EmployeeServiceComponent } from "./employee-service/employee-service.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServiceComponent } from "./service/service.component";

export const applicationRoutes: Routes = [      //must export this so it can be seen in app.module.ts
    //{ path: '', component : HomeComponent },    //a default route, but this is less than ideal because different urls show up when going between default landing page and home
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },

    { path: 'service', component: ServiceComponent, children: [     //child routes
        {path: '', redirectTo: 'employee-service', pathMatch: 'full' }, //set the service route to default to employee-service
        {path: 'employee-service', component: EmployeeServiceComponent },
        {path: 'customer-service', component: CustomerServiceComponent }
    ] },

    {path: '**', component: PageNotFoundComponent }     //this is a wildcard path that acts as a catch all. any routes that dont exist above go to our error page
]

