import { HomeComponent } from './../home/home.component';
import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { NotfoundComponent } from '../notfound/notfound.component';

export const routes: Routes = [
    
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    
    {path:'startframework' , component:HomeComponent , title:'home'},
    {path:'about' , component:AboutComponent , title:'about'},
    {path:'portfolio' , component:PortfolioComponent , title:'portfolio'},
    {path:'contact' , component:ContactComponent , title:'contact'},
    {path:'**', component:NotfoundComponent , title:'Error 404'},
];
