import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-page.html',
  styleUrls: ['./booking-page.css']
})
export class BookingPageComponent implements OnInit {
  slots: any[] = [];
  interviewerId!: number;
  selectedSlotId: number | null = null;
  candidateId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

 ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.interviewerId = Number(idParam);
      this.loadSlots();
    }
  }

  loadSlots() {
    this.bookingService.getSlotsByInterviewer(this.interviewerId).subscribe({
      next: (data) => {
        this.slots = data;
        this.cdr.detectChanges();
        console.log('Slots Loaded:', this.slots);
      },
      error: (err) => console.error('Error fetching slots:', err)
    });
  }
  selectSlot(id: number) {
    this.selectedSlotId = id;
  }

  confirmBooking() {
    if (this.selectedSlotId && this.candidateId) {
      const bookingData = {
        candidateId: this.candidateId,
        slotId: this.selectedSlotId
      };

      this.bookingService.createBooking(bookingData).subscribe({
        next: (res) => {
          alert('Booking Successful!');
          this.router.navigate(['/my-bookings']); 
        },
        error: (err) => alert('Booking Failed! Please check your ID.')
      });
    }
  }
}