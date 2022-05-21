import { FilterDate } from '@ticket-booking/shared/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bmc-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  filters: FilterDate[] = [];
  selectedDate = '';

  ngOnInit() {
    this.getFilters();
  }

  // get filters value, text to display
  getFilters() {
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date();
    this.filters = [];
    this.selectedDate = this.dateToString(date);

    for (let i = 0; i < 7; i++) {
      this.filters.push({ date: this.dateToString(date), day: i === 0 ? 'Today' : weekday[date.getDay()] });
      date.setDate(date.getDate() + 1);
    }

    this.filters.push({ date: 'all', day: 'All Times' });
  }

  // change filter
  changeFilter(date: string) {
    this.selectedDate = date;
  }

  // date to string mm/dd/yyyy
  private dateToString(date: Date): string {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }
}
