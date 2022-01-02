import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { BookingComponent } from './components/booking/booking.component';


const routes: Routes = [
  { path: "booking", component: BookingComponent },
  { path: "bookings-list", component: BookingListComponent },
  { path: "", redirectTo: "/bookings-list", pathMatch: "full" },
  { path: "**", redirectTo: "/bookings-list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
