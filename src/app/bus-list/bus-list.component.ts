import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';



@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrl: './bus-list.component.css',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class BusListComponent {
  buses = [
    { name: 'Bus A', route: 'City A to City B', seats: 20, fare: 1000, currency: 'USD', image: 'assets/bus-a.jpg' },
    { name: 'Bus B', route: 'City C to City D', seats: 15, fare: 1200, currency: 'EUR', image: 'assets/bus-b.jpg' },
    { name: 'Bus C', route: 'City E to City F', seats: 10, fare: 1500, currency: 'GBP', image: 'assets/bus-c.jpg' }
  ];
  constructor(private router:Router){}

  bookBus(bus:any){
    this.router.navigate(['/booking'],{state:{bus}});
  }
}
