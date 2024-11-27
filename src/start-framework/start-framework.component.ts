import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-start-framework',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './start-framework.component.html',
  styleUrl: './start-framework.component.css'
})
export class StartFrameworkComponent {

}
