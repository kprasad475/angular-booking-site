import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
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
