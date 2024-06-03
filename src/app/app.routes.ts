import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomDetailsComponent } from './pages/room-details/room-details.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'room/:id', component: RoomDetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];
