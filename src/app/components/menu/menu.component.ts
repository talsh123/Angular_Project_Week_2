import { Component, Input, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  @Input() NavBarOpen?: boolean = true;
  @Input() MainPagesSelector?: string = 'home';
  CalenderService: Date;

  constructor(
    private calenderService: CalendarService,
    private router: Router
  ) {
    this.CalenderService = calenderService.getCalenderInfo();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.CalenderService = this.calenderService.getCalenderInfo();
    }, 1000);
  }

  getCalenderService() {
    return this.calenderService;
  }

  onPressMenuItem(menuItem: string) {
    this.router.navigateByUrl(menuItem);
  }
}
