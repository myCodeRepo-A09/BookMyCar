import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  fleet = [
    {
      name: 'Toyota Innova Crysta',
      image: 'assets/innova4.jpg',
      capacity: '6-7',
      price: '₹18/km'
    },
    {
      name: 'Maruti Suzuki Ertiga',
      image: 'assets/eritga.jpg',
      capacity: '6',
      price: '₹15/km'
    },
   
    {
      name: 'Tempo Traveller (12 Seater)',
      image: 'assets/traveller.webp',
      capacity: '12',
      price: '₹25/km'
    },
    {
      name: 'Mahindra Bollero',
      image: 'assets/bolero.webp',
      capacity: '7',
      price: '₹15/km'
    },
    {
      name: 'Maruti Swift',
      image: 'assets/swift.webp',
      capacity: '4',
      price: '₹12/km'
    },
    {
      name: 'Maruti Dezire',
      image: 'assets/dezirecab.webp',
      capacity: '4',
      price: '₹12/km'
    }
  ]
}
