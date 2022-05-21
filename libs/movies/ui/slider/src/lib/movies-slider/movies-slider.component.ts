import { DatabaseService } from '@ticket-booking/shared/services';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bmc-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.sass']
})
export class MoviesSliderComponent {
  @Input() limit!: number;
  movies$ = this.db.getMovies(this.limit);

  constructor(
    private db: DatabaseService,
  ) { }
}
