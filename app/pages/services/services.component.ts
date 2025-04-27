import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  currentSlide = 0;
  
  services = [
    {
      title: 'Airport Transfers',
      icon: 'fas fa-plane',
      image: 'assets/cstairport.jpg',
      description: 'Reliable airport pickups and drop-offs with flight tracking and meet & greet service.',
      features: [
        'Flight monitoring',
        'Meet & greet',
        'Waiting time included',
        '24/7 availability'
      ],
      price: '1200',
      unit: 'trip'
    },
    {
      title: 'City Rides',
      icon: 'fas fa-city',
      image: 'assets/mumbai.jpg',
      description: 'Comfortable point-to-point transportation within Navi Mumbai and surrounding areas.',
      features: [
        'Hourly or distance-based',
        'Multiple stops available',
        'AC vehicles',
        'Professional drivers'
      ],
      price: '15',
      unit: 'km'
    },
    {
      title: 'Outstation Trips',
      icon: 'fas fa-road',
      image: 'assets/rajstan.jpg',
      description: 'Long-distance travel to nearby cities and tourist destinations with flexible packages.',
      features: [
        'One-way or round trips',
        'Multiple vehicle options',
        'Driver allowance included',
        'Customizable itineraries'
      ],
      price: '18',
      unit: 'km'
    },
    {
      title: 'Corporate Travel',
      icon: 'fas fa-briefcase',
      image: 'assets/carporate1.jpg',
      description: 'Dedicated transportation solutions for business professionals and corporate clients.',
      features: [
        'Monthly contracts',
        'Priority booking',
        'Executive vehicles',
        'Invoice billing'
      ],
      price: '2500',
      unit: 'day'
    },
    {
      title: 'Wedding Services',
      icon: 'fas fa-glass-cheers',
      image: 'assets/wedding.jpg',
      description: 'Premium vehicles for weddings and special occasions with professional chauffeurs.',
      features: [
        'Decorated vehicles',
        'Bridal packages',
        'Multi-car discounts',
        'Flexible durations'
      ],
      price: '3500',
      unit: 'day'
    },
    {
      title: 'Tour Packages',
      icon: 'fas fa-umbrella-beach',
      image: 'assets/packages.jpg',
      description: 'Customized tour packages to popular destinations with knowledgeable drivers.',
      features: [
        'Custom itineraries',
        'Multi-day packages',
        'Sightseeing included',
        'Hotel coordination'
      ],
      price: '3000',
      unit: 'day'
    }
  ];

  fleet = [
    {
      name: 'Toyota Innova Crysta',
      image: 'assets/innova4.jpg',
      capacity: '6-7',
      price: '₹18'
    },
    {
      name: 'Maruti Suzuki Ertiga',
      image: 'assets/eritga.jpg',
      capacity: '6',
      price: '₹15'
    },
    {
      name: 'Mahindra Bolero',
      image: 'assets/bolero.webp',
      capacity: '6',
      price: '₹14'
    },
    {
      name: 'Maruti Swift',
      image: 'assets/swift.webp',
      capacity: '4',
      price: '₹12'
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.fleet.length;
    this.scrollCarousel();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.fleet.length) % this.fleet.length;
    this.scrollCarousel();
  }

  scrollCarousel() {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    if (track) {
      track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }

  openBookingModal(service: any) {
    // Implement your booking modal logic here
    console.log('Booking service:', service.title);
    // You can use a dialog service or create a modal component
  }
}