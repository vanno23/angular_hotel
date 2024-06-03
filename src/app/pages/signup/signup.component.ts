import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { DataService } from '../../services/data.service'; // Import the DataService

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HeaderComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.signUpForm = this.fb.group({
      email: [''],
      password: [''],
      avatar: [''],
      name: [''],
      phoneNumber: [''],
      gender: [0],
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.dataService.register(this.signUpForm.value).then(
        (response) => {
          if (response.ok) {
            console.log('Registration successful');
            // Handle successful response, e.g., navigate to a different page or show a success message
          } else {
            console.error('Error during registration', response.statusText);
            // Handle error response, e.g., show an error message
          }
        },
        (error) => {
          console.error('Error during registration', error);
          // Handle fetch error, e.g., show an error message
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}
