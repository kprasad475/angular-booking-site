import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
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
