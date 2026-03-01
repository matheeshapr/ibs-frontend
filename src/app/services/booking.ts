import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // 1. Backend එකේ InterviewSlotController එකෙන් slots ටික ගන්න
  getAllSlots(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/interview-slot/all`);
  }

  // 2. BookingController එකට අලුත් booking එකක් යවන්න
  createBooking(bookingData: any): Observable<string> {
    return this.http.post(`${this.baseUrl}/booking/create`, bookingData, { responseType: 'text' });
  }
}