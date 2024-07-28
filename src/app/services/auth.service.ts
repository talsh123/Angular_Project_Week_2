import { Injectable, OnInit } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService implements OnInit {
  public loggedIn = false;
  validateCredentials(username: string, password: string): boolean {
    const hasNumber = /\d/; // Regular expression to check for digits
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // Regular expression to check for special characters
    const hasUpperCase = /[A-Z]/; // Regular expression to check for uppercase letters
    const hasLowerCase = /[a-z]/; // Regular expression to check for lowercase letters

    return (
      username.length >= 5 &&
      username.indexOf(' ') == -1 &&
      password.length >= 5 &&
      /\d/.test(password) && // Username is at least 5
      hasNumber.test(password) && // Check if it contains at least one number
      hasSpecialChar.test(password) && // Check if it contains at least one special character
      hasUpperCase.test(password) && // Check if it contains at least one uppercase letter
      hasLowerCase.test(password) && // Check if it contains at least one lowercase letter
      password.indexOf(' ') == -1 // Check if it has no spaces
    );
  }

  ngOnInit(): void {
    // Check
  }

  onSwitchMode(): void {
    this.loggedIn = !this.loggedIn;
  }

  getSwitchMode(): boolean {
    return this.loggedIn;
  }

  // The following function creates a sessionID
  generateSessionID() {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join(
      ''
    );
  }

  // The following function sets the cookie in the user's browser
  setCookie(name: string = 'SessionID', value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  // The function gets a cookie with a specific name
  getCookie(name: string = 'SessionID') {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }
}
