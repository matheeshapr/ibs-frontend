import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { MyBookingsComponent } from "./components/my-bookings/my-bookings";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MyBookingsComponent, CommonModule ], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class AppComponent {
  showNavbar: boolean = true;

constructor(private router: Router) {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      const currentUrl = event.urlAfterRedirects;
      
      if (currentUrl === '/' || currentUrl.includes('/login') || currentUrl.includes('/register')) {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
      
      console.log('Current URL:', currentUrl, 'Show Navbar:', this.showNavbar);
    }
  });
}
}