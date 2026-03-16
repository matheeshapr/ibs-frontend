import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../services/booking';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-bookings.html',
  styleUrls: ['./my-bookings.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadAllBookings();
  }

  loadAllBookings(): void {
    this.bookingService.getAllBookings().subscribe({
      next: (data) => {
        this.bookings = data;
      },
      error: (err) => console.error('Error loading bookings:', err)
    });
  }
}