import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { SlotGrid } from  './components/slot-grid/slot-grid';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent, SlotGrid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}