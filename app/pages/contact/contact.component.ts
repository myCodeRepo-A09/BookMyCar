import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      subject: [''],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      const formValue = this.contactForm.value;
      // Here you would typically send the form data to your backend
      const phoneNumber = '918552980643'; // your number or business number
      const message = `Name: ${formValue.name}\nphone: ${formValue.phone}\nSubject:${formValue.subject}\nMessage: ${formValue.message}`;
      const encodedMessage = encodeURIComponent(message);
      console.log(encodedMessage)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
      window.open(whatsappUrl, '_blank');
      alert('Thank you for your message! We will contact you soon.');
      this.contactForm.reset();
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}