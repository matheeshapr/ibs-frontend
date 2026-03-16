import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { BookingService } from '../../services/booking';
import { Interviewer } from '../../models/interviewer.model';

@Component({
  selector: 'app-interviewer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interviewer-list.html',
  styleUrls: ['./interviewer-list.css']
})
export class InterviewerListComponent implements OnInit {
  interviewers: Interviewer[] = [];

  
  constructor(private bookingService: BookingService, private router: Router, private cdr: ChangeDetectorRef) {}

 ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.bookingService.getInterviewers().subscribe({
      next: (data) => {
        this.interviewers = data;
        this.cdr.detectChanges();
        console.log('Data loaded:', this.interviewers);
      },
      error: (err) => console.error(err)
    });
  }

  
  viewSlots(id: number): void {
    this.router.navigate(['/booking', id]);
  }
  
}