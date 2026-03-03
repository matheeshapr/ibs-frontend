import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span>🎯 Interview Booking System</span>
      <span style="flex:1"></span>
      <button mat-button routerLink="/slots">Slots</button>
      <button mat-button routerLink="/bookings">My Bookings</button>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}