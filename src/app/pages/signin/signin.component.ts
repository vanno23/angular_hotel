import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { DataService } from '../../services/data.service'; // Import the DataService

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.signInForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const formData = this.signInForm.value;
      this.dataService.signIn(formData).then(
        (response) => {
          if (response.ok) {
            console.log('Sign-in successful');
          } else {
            console.error('Error during sign-in', response.statusText);
          }
        },
        (error) => {
          console.error('Error during sign-in', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
