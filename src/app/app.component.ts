import { Component } from '@angular/core'
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { NavberComponent } from "../navber/navber.component";
import { FooterComponent } from "../footer/footer.component";
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import resolveConfig from 'tailwindcss/resolveConfig'




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavberComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent, PortfolioComponent, StartFrameworkComponent, NotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
@Injectable({
  providedIn: 'root'
})

export class AppComponent implements OnInit {
  title = 'firstAss';
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  loadFlowbite(callback: (flowbite: any) => void) {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then(flowbite => {
        callback(flowbite);
      });
    }
  }

  ngOnInit(): void {
   
    this.loadFlowbite(flowbite => {
     
      console.log('Flowbite loaded', flowbite);
    });
  }
  }




