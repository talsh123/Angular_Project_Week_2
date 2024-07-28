import { Component, OnInit, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn: boolean = false;

  // Signal for Password field
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  ngOnInit(): void {
    // Check if the user authinticated before
    if (this.authService.getCookie('SessionID') != null) {
      this.loggedIn = true;
      this.authService.onSwitchMode();
    }
  }

  constructor(private authService: AuthService, private form: FormBuilder) {
    this.loginForm = this.form.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.loggedIn = this.authService.getSwitchMode();
  }

  // This function runs when the user submits the form
  onSubmit() {
    if (
      this.authService.validateCredentials(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      )
    ) {
      this.authService.onSwitchMode();
      this.loggedIn = this.authService.getSwitchMode();
      this.authService.setCookie(
        'SessionID',
        this.authService.generateSessionID(),
        1
      );
    }
  }
}
