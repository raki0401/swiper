import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'src/angular/src/public-api';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from '../../../build/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  }

  slidesPerView: number = 2;
  pagination: any = false;

  togglePagination() {
    if (!this.pagination) {
      this.pagination = { clickable: true };
    } else {
      this.pagination = false;
    }
  }

  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }

  scrollbar: any = false;
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true };
    } else {
      this.scrollbar = false;
    }
  }

  log(string) {
    console.log(string);
  }
}
