import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() NavBarOpen?: boolean = true;
  @Input() MainPagesSelector?: string = 'home';
  CalenderService: Date;
  loggedIn: boolean = false;

  constructor(
    private calenderService: CalendarService,
    private router: Router,
    private authService: AuthService
  ) {
    this.CalenderService = calenderService.getCalenderInfo();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.CalenderService = this.calenderService.getCalenderInfo();
    }, 1000);
    this.loggedIn = this.authService.getSwitchMode();
  }

  ngOnChanges() {
    this.loggedIn = this.authService.getSwitchMode();
  }

  getCalenderService() {
    return this.calenderService;
  }

  onPressMenuItem(menuItem: string) {
    this.router.navigateByUrl(menuItem);
  }
}
