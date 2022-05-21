import { DatabaseService } from '@ticket-booking/shared/services';
import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'bmc-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.sass']
})
export class MovieSearchComponent {

  private searchTerms = new Subject<string>();
  movies$ = this.searchTerms.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term: string) => this.db.searchMovies(term))
  );

  constructor(
    private db: DatabaseService,
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
