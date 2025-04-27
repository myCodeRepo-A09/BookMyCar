import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var google: any;
interface Service {
  title: string;
  icon: string;
  description: string;
  images: string[];
  currentIndex: number;
  interval?: number;  // Using number type for setInterval return value
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {

  testimonials = [
    {
      name: 'Akshay Markad',
      rating: 5,
      comment: 'Excellent service! The driver was punctual and very professional. Highly recommended!',
      date: 'March 15, 2025'
    },
    {
      name: 'Avinash Andhale',
      rating: 5,
      comment: 'Clean and comfortable cars with friendly drivers. Will definitely use again for my airport transfers.',
      date: 'February 28, 2025'
    },
    {
      name: 'Priti Andhale',
      rating: 4,
      comment: 'Good service overall. The app is easy to use and the pricing is transparent.',
      date: 'April 2, 2025'
    }
  ];
  

  services:Service[]= [
    {
      title: 'Airport Transfers',
      icon: 'fas fa-plane',
      description: 'Reliable airport pickups and drop-offs with flight tracking.',
      images: [
        'assets/navimumbaiairport.jpg',
        'assets/cstairport.jpg',
        'assets/puneairport1.jpg'
      ],
      currentIndex: 0,
      //interval?: number | undefined
    },
    {
      title: 'City Tours',
      icon: 'fas fa-city',
      description: 'Explore the city with our knowledgeable drivers.',
      images: [
        'assets/cst.webp',
        'assets/shaniwar wada.jpg',
        'assets/tajmahal.jpg',
        'assets/TaraporevalaAquarium.jpg'
      ],
      currentIndex: 0,
      //interval?: number | undefined
  
    },
    {
      title: 'Outstation Rides',
      icon: 'fas fa-road',
      description: 'Comfortable long-distance travel at competitive rates.',
      images: [
        'assets/maharshtra.jpg',
        'assets/mumbai.jpg',
        'assets/nashik.jpg',
        'assets/rajstan.jpg',
        'assets/gujrat.jpg'
      ],
      currentIndex: 0,
     // interval?: number | undefined
  
    },
    {
      title: 'Corporate Travel',
      icon: 'fas fa-briefcase',
      description: 'Professional service for your business travel needs.',
      images: [
        'assets/carporate1.jpg', 
        'assets/ATLCarporateParkPowai.webp',
        'assets/eonkharaditpark.jpg',
        'assets/hinjewaditark.jpg',
        'assets/khargharitpark.jpg',
        'assets/reliance carporatepark.webp',
        'assets/yerawadaitpark.jpg'
      ],
      currentIndex: 0,
      //interval?: number | undefined
    },
    {
      title: 'Wedding Services',
      icon: 'fas fa-glass-cheers',
      images: ['assets/wedding.jpg'],
      description: 'Premium vehicles for weddings and special occasions with professional chauffeurs.',
      currentIndex: 0,
    },
    {
      title: 'Tour Packages',
      icon: 'fas fa-umbrella-beach',
      images: ['assets/packages.jpg'],
      description: 'Customized tour packages to popular destinations with knowledgeable drivers.',
      currentIndex: 0,
    }
  ];

  currentSlide = 0;
  totalSlides = 5;

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateCarousel();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateCarousel();
  }

  private updateCarousel() {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    if (track) {
      track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }

  loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCIuBjMAzQnrwq6iiMWo9ujjZ4Yjph1dWQ&callback=initMap';
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
    
    (window as any).initMap = () => {
      this.initializeMap();
    };
  }

  initializeMap() {
    const officeLocation = { lat: 19.0474, lng: 73.0698 }; // Mumbai coordinates
    
    const map = new google.maps.Map(document.getElementById('google-map'), {
      center: officeLocation,
      zoom: 15,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      styles: [
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#444444"}]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{"color": "#f2f2f2"}]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{"saturation": -100}, {"lightness": 45}]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{"visibility": "simplified"}]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{"color": "#c4d8e2"}, {"visibility": "on"}]
        }
      ]
    });
    
    const marker = new google.maps.Marker({
      position: officeLocation,
      map: map,
      title: 'BookMyCar Office',
      animation: google.maps.Animation.DROP
    });
    
    const infowindow = new google.maps.InfoWindow({
      content: '<div style="padding:10px;"><strong>BookMyCar Office</strong><br>123 Main Street, Mumbai</div>'
    });
    
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
  }

  ngOnInit() {
    // Your existing code
    this.services.forEach(service => {
      this.startSlider1(service);
    });
  }
  startSlider(service: any) {
    service.interval = setInterval(() => {
      this.nextSlide1(service);
    }, 3000);
  }
  

  ngAfterViewInit() {
    // Start auto-sliding
    setInterval(() => {
      this.nextSlide();
    }, 5000);

    // Load Google Maps script
    this.loadGoogleMapsScript();
  }

  startSlider1(service: Service) {
    this.pauseSlider1(service);
    service.interval = window.setInterval(() => {
      this.nextSlide1(service);
    }, 3000);
  }

  pauseSlider1(service: Service) {
    if (service.interval) {
      clearInterval(service.interval);
      service.interval = undefined;
    }
  }

  resumeSlider1(service: Service) {
    this.startSlider1(service);
  }

  nextSlide1(service: Service) {
    service.currentIndex = (service.currentIndex + 1) % service.images.length;
  }

  prevSlide1(service: Service) {
    service.currentIndex = (service.currentIndex - 1 + service.images.length) % service.images.length;
  }

  goToSlide1(service: Service, index: number) {
    service.currentIndex = index;
  }

  ngOnDestroy1() {
    this.services.forEach(service => {
      this.pauseSlider1(service);
    });
  }
}
