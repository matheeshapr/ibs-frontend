// src/app/components/slot-grid/slot-grid.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// අන්තිමට තිබ්බ .service කෑල්ල අයින් කරන්න
import { BookingService } from '../../services/booking';
@Component({
  selector: 'app-slot-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slot-grid.html',
  styleUrl: './slot-grid.css'
})
export class SlotGrid implements OnInit {
  slots: any[] = [];

  // මෙතන 'BookingService' කියන නම දැන් නිවැරදිව පෙනේවි
  constructor(private bookingService: BookingService) {} 

  ngOnInit() {
    this.loadSlots();
  }

  loadSlots() {
    this.bookingService.getAllSlots().subscribe(res => {
      this.slots = res;
    });
  }

  onBook(slotId: number) {
    console.log("Selected Slot ID:", slotId);
  }
}