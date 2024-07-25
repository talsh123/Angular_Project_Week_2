import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  NavBarOpen: boolean = false;
  MenuItemSelected: string = 'main';

  toggleNavBar() {
    this.NavBarOpen = !this.NavBarOpen;
  }
}
