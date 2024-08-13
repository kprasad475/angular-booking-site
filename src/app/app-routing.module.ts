import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [{ path: 'buslist', component: BusListComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'payment', component: PaymentComponent },  
  { path: '', redirectTo: '/buslist', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
