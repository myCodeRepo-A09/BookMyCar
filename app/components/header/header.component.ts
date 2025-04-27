import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  isMenuOpen = false;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Force enable all nav links
    // document.querySelectorAll('.nav a').forEach(link => {
    //   link.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const route = link.getAttribute('routerLink');
    //     if (route) {
    //       this.router.navigate([route]);
    //       this.isMenuOpen = false;
    //     }
    //   });
    // });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}