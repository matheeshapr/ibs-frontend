import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { MyBookingsComponent } from "./components/my-bookings/my-bookings";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MyBookingsComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class AppComponent {
  title = 'ibs-frontend';
}