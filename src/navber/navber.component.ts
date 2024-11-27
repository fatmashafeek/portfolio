import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navber',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navber.component.html',
  styleUrl: './navber.component.css'
})
export class NavberComponent {

}
