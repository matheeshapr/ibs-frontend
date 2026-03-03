import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slot } from '../models/slot.model';

@Injectable({ providedIn: 'root' })
export class SlotService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAvailableSlots(): Observable<Slot[]> {
    return this.http.get<Slot[]>(`${this.baseUrl}/slots/available`);
  }

  getAllSlots(): Observable<Slot[]> {
    return this.http.get<Slot[]>(`${this.baseUrl}/slots/all`);
  }
}