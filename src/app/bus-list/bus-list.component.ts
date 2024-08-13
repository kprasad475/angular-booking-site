import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrl: './bus-list.component.css'
})
export class BusListComponent {
  buses = [
    { name: 'Bus A', route: 'City A to City B', seats: 20, fare: 1000, currency: 'USD' },
    { name: 'Bus B', route: 'City C to City D', seats: 15, fare: 1200, currency: 'EUR' },
    { name: 'Bus C', route: 'City E to City F', seats: 10, fare: 1500, currency: 'GBP' }
  ];
  constructor(private router:Router){}

  bookBus(bus:any){
    this.router.navigate(['/booking'],{state:{bus}});
  }
}
