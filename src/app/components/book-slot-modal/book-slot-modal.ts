import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookingService } from '../../services/booking';

@Component({
  selector: 'app-book-slot-modal',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatDialogModule, MatButtonModule,
    MatInputModule, MatFormFieldModule
  ],
  template: `
    <h2 mat-dialog-title>📋 Book Interview Slot</h2>

    <mat-dialog-content>
      <p><strong>Interviewer:</strong> {{ data.slot.interviewerName }}</p>
      <p><strong>Time:</strong> {{ data.slot.startTime | date:'full' }}</p>

      <mat-form-field appearance="outline" style="width:100%; margin-top:16px">
        <mat-label>Your Candidate ID</mat-label>
        <input matInput type="number" [(ngModel)]="candidateId" placeholder="Enter your ID">
      </mat-form-field>

      <!-- Backend Validation Error - Nicely displayed -->
      <div *ngIf="errorMessage" style="
        background:#ffebee; 
        color:#c62828; 
        padding:12px; 
        border-radius:8px;
        margin-top:8px">
        ⚠️ {{ errorMessage }}
      </div>

      <!-- Success -->
      <div *ngIf="successMessage" style="
        background:#e8f5e9; 
        color:#2e7d32; 
        padding:12px; 
        border-radius:8px;
        margin-top:8px">
        ✅ {{ successMessage }}
      </div>
    </mat-dialog-content>

    <mat-dialog-actions [align]="'end'">
      <button mat-button [mat-dialog-close]="null">Cancel</button>
      <button mat-raised-button color="primary"
              (click)="confirmBooking()"
              [disabled]="loading || !candidateId">
        {{ loading ? 'Booking...' : 'Confirm Booking' }}
      </button>
    </mat-dialog-actions>
  `
})
export class BookSlotModalComponent {
  candidateId: number | null = null;
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BookSlotModalComponent>,
    private bookingService: BookingService
  ) {}

  confirmBooking() {
    if (!this.candidateId) return;

    this.loading = true;
    this.errorMessage = '';

    const booking = {
      candidateId: this.candidateId,
      slotId: this.data.slot.id
    };

    this.bookingService.createBooking(booking).subscribe({
      next: (res) => {
        this.successMessage = 'Booking confirmed successfully!';
        this.loading = false;
        setTimeout(() => this.dialogRef.close(true), 1500);
      },
      error: (err) => {
        // ✅ Backend error nicely displayed
        this.errorMessage = err.error?.message || err.error?.error || 'Booking failed!';
        this.loading = false;
      }
    });
  }
}