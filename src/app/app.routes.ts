import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { InterviewerListComponent } from './components/interviewer-list/interviewer-list';
import { BookingPageComponent } from './components/booking-page/booking-page';
import { MyBookingsComponent } from './components/my-bookings/my-bookings';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'interviewers', component: InterviewerListComponent },
  { path: 'booking/:id', component: BookingPageComponent },
  { path: 'my-bookings', component: MyBookingsComponent }, 
  { path: '**', redirectTo: 'login' } 
];