import { Routes } from '@angular/router';
import { InterviewerListComponent } from './components/interviewer-list/interviewer-list';
import { BookingPageComponent } from './components/booking-page/booking-page';
import { MyBookingsComponent } from './components/my-bookings/my-bookings';

export const routes: Routes = [
  { path: '', component: InterviewerListComponent },
  { path: 'booking/:id', component: BookingPageComponent },
  { path: 'my-bookings', component: MyBookingsComponent }, 
  { path: '**', redirectTo: '' } 
];