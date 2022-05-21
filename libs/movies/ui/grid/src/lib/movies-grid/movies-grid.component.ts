import { DatabaseService } from '@ticket-booking/shared/services';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'bmc-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesGridComponent {
  @Input() limit!: number;
  @Input() columns!: number;
  @Input() exclude?: number | number[];
  movies$ = this.db.getMovies(this.limit, this.exclude);

  constructor(
    private db: DatabaseService,
    private modalService: BsModalService,
    private sanitizer: DomSanitizer,
  ) { }

}
