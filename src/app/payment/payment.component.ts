import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class PaymentComponent {
  selectedBus: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.selectedBus = navigation?.extras.state?.['bus'];
  }
  makePayment() {
    alert('Payment Successful!');
    this.router.navigate(['/']);
  }
}
