import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.css']
})
export class LoginDashboardComponent {
loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    // Simple hardcoded credentials
    if (email === 'admin@morrhtechSolutions34.com' && password === '$m0rrhT3ch@921*7;,9') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']); // Redirect to existing dashboard
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
