import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from '@ticket-booking/shared/models';

@Component({
  selector: 'bmc-movie-details-card',
  templateUrl: './movie-details-card.component.html',
  styleUrls: ['./movie-details-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsCardComponent {
  showAllTimes = false;

  @Input() movie!: Movie;
  @Input() showShowtimes = true;

  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter();

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  showAllShowtimes(): void {
    this.showAllTimes = true;
  }

  hideAllShowtimes(): void {
    this.showAllTimes = false;
  }

  getPreviewUrl(trailer: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedUrl(trailer));
  }

  getEmbedUrl(url: string) {
    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
  }

}
