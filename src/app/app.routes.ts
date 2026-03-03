import { Routes } from '@angular/router';
import { CalendarViewComponent } from './components/calendar-view/calendar-view';
import { BookingList } from './components/booking-list/booking-list';

export const routes: Routes = [
  { path: '', redirectTo: 'slots', pathMatch: 'full' },
  { path: 'slots', component: CalendarViewComponent },
  { path: 'bookings', component: BookingList },
];