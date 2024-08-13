import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
selectedBus:any;
  constructor(private router:Router){
    const navigation= this.router.getCurrentNavigation();
    this.selectedBus = navigation?.extras.state?.['bus'];
  }

  proceedToPayment() {
    this.router.navigate(['/payment'], { state: { bus: this.selectedBus } });
  }

}
