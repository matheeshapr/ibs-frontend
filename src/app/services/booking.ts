import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interviewer } from '../models/interviewer.model';
import { InterviewSlot } from '../models/slot.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(private http: HttpClient) {}

  // getInterviewers(): Observable<Interviewer[]> {
  //   return this.http.get<Interviewer[]>('http://localhost:8080/interviewer/get-all');
  // }

  getSlotsByInterviewer(id: number): Observable<InterviewSlot[]> {
    return this.http.get<InterviewSlot[]>(`http://localhost:8080/booking/interviewer-by/${id}`);
  }

  createBooking(booking: any): Observable<string> {
    return this.http.post('http://localhost:8080/booking/create', booking, { responseType: 'text' });
  }

  getAllBookings(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8080/booking/all-bookings');
}

getInterviewers(): Observable<Interviewer[]> {
  return this.http.get<Interviewer[]>('http://localhost:8080/interviewer/get-all').pipe(
    tap(data => console.log('Backend Data:', data)) 
  );
}
}