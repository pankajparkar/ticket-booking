import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DatabaseService } from '@ticket-booking/shared/services';
import { Movie, ShowtimeDate } from '@ticket-booking/shared/models';

@Component({
  selector: 'bmc-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowtimesComponent implements OnInit, OnChanges {
  @Input() movie!: Movie;
  @Input() showAllTimes = false;
  @Input() filterDate = '';
  showtimes: ShowtimeDate[] = [];

  constructor(
    private db: DatabaseService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.getShowtimes();
  }

  getShowtimes() {
    this.db.getMovieShowtimes(this.movie, this.filterDate, this.showAllTimes).subscribe(
      (showtimes) => {
        this.showtimes = showtimes;
        this.cd.detectChanges();
      }
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showAllTimes']) {
      this.getShowtimes();
      this.cd.detectChanges();
    }
  }
}
