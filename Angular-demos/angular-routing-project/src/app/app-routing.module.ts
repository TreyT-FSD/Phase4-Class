import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ServiceComponent } from "./service/service.component";

export const applicationRoutes: Routes = [      //must export this so it can be seen in app.module.ts
    { path: '', component : HomeComponent },    //a default route followed by routes for each component
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'service', component: ServiceComponent }
]

