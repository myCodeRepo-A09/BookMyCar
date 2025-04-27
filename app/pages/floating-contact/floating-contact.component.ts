import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [],
  templateUrl: './floating-contact.component.html',
  styleUrl: './floating-contact.component.scss'
})
export class FloatingContactComponent {
  isExpanded = false;

  toggleContact() {
    this.isExpanded = !this.isExpanded;
  }
}
