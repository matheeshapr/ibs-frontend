// src/app/app.ts
import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar'; 
import { SlotGrid } from './components/slot-grid/slot-grid'; // file name එක චෙක් කරන්න

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, SlotGrid], // මෙතන තියෙන නම් දෙක පහළ පන්ති වල නම් වලට සමාන විය යුතුයි
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }