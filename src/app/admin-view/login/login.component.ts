import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cred } from '../../cred';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  authForm: FormGroup;
  isSubmitted = false;
  errorMessage: string;

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]+( |_)*[a-zA-Z0-9]*$"), Validators.min]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
  }

  get formControls() { return this.authForm.controls; }

  onSubmit() {
    this.isSubmitted = true;
    this.errorMessage = null;
    if (this.authForm.invalid) {
      console.error("Invalid credentials");
      this.errorMessage = "Invalid Credentials!";
      return;
    }
    this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/admin');
  }
}
