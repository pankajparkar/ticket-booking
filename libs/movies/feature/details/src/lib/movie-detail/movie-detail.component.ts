import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DatabaseService } from '@ticket-booking/shared/services';
import { Component, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bmc-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent {
  movieId = +this.route.snapshot.paramMap.get('id')!;
  movie$ = this.db.getMovie(this.movieId);
  showAllTimes = false;
  modalRef!: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService,
    private modalService: BsModalService,
  ) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }
}
