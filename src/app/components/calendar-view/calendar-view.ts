import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { SlotService } from '../../services/slot';
import { Slot } from '../../models/slot.model';
import { BookSlotModalComponent } from '../book-slot-modal/book-slot-modal';

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatDialogModule, MatButtonModule,
    MatChipsModule, MatSelectModule, MatCardModule
  ],
  template: `
    <div class="calendar-wrapper">
      <h2>📅 Available Interview Slots</h2>

      <!-- Filter -->
      <mat-form-field appearance="outline">
        <mat-label>Filter by Status</mat-label>
        <mat-select [(ngModel)]="selectedFilter" (ngModelChange)="applyFilter()">
          <mat-option value="all">All</mat-option>
          <mat-option value="available">Available</mat-option>
          <mat-option value="booked">Booked</mat-option>
        </mat-select>
      </mat-form-field>

      <!-- Loading -->
      <p *ngIf="loading">Loading slots...</p>

      <!-- Error -->
      <p *ngIf="errorMsg" style="color:red">{{ errorMsg }}</p>

      <!-- Slot Grid -->
      <div class="slot-grid">
        <mat-card *ngFor="let slot of filteredSlots" 
                  class="slot-card"
                  [class.booked-card]="slot.booked">
          
          <mat-card-header>
            <mat-card-title>{{ slot.interviewerName }}</mat-card-title>
          </mat-card-header>

          <mat-card-content>
            <p>🕐 {{ slot.startTime | date:'MMM d, h:mm a' }}</p>
            <p>🕑 {{ slot.endTime | date:'h:mm a' }}</p>

            <!-- Status Badge -->
            <mat-chip-set>
              <mat-chip [color]="slot.booked ? 'warn' : 'primary'" highlighted>
                {{ slot.booked ? '🔴 Booked' : '🟢 Available' }}
              </mat-chip>
            </mat-chip-set>
          </mat-card-content>

          <mat-card-actions>
            <button mat-raised-button color="primary"
                    [disabled]="slot.booked"
                    (click)="openModal(slot)">
              Book Now
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .calendar-wrapper { padding: 24px; }
    .slot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }
    .slot-card { border-left: 4px solid #3f51b5; }
    .booked-card { border-left: 4px solid #f44336; opacity: 0.7; }
    mat-form-field { width: 200px; }
  `]
})
export class CalendarViewComponent implements OnInit {
  slots: Slot[] = [];
  filteredSlots: Slot[] = [];
  selectedFilter = 'all';
  loading = false;
  errorMsg = '';

  constructor(
    private slotService: SlotService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadSlots();
  }

  loadSlots() {
    this.loading = true;
    this.slotService.getAllSlots().subscribe({
      next: (data) => {
        this.slots = data;
        this.filteredSlots = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = 'Failed to load slots. Backend connected?';
        this.loading = false;
      }
    });
  }

  applyFilter() {
    if (this.selectedFilter === 'all') {
      this.filteredSlots = this.slots;
    } else if (this.selectedFilter === 'available') {
      this.filteredSlots = this.slots.filter(s => !s.booked);
    } else {
      this.filteredSlots = this.slots.filter(s => s.booked);
    }
  }

  openModal(slot: Slot) {
    const dialogRef = this.dialog.open(BookSlotModalComponent, {
      width: '400px',
      data: { slot }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.loadSlots(); // Refresh after booking
    });
  }
}