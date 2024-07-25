import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() toggleNavBar = new EventEmitter<void>();

  onToggleNavBar() {
    this.toggleNavBar.emit();
  }
}
