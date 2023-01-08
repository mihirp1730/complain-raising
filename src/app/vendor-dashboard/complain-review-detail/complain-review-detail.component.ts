import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { ComplainService } from 'src/app/shared/complain-service.service';
import { ComplainFields, complainStatus } from '../../shared/complain-fields';

@Component({
  selector: 'app-complain-review-detail',
  templateUrl: './complain-review-detail.component.html',
  styleUrls: ['./complain-review-detail.component.scss'],
})
export class ComplainReviewDetailComponent implements OnInit, OnChanges {
  @Input() complain: ComplainFields;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentComplain: ComplainFields;
  message = '';

  constructor(public complainService: ComplainService) {}

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentComplain = { ...this.complain };
  }

  // updatePublished(status): void {
  //   this.complainService
  //     .update(this.currentComplain.id, { published: status })
  //     .then(() => {
  //       this.currentComplain.published = status;
  //       this.message = 'The status was updated successfully!';
  //     })
  //     .catch((err) => console.log(err));
  // }

  updateComplainStatus(): void {
    const data = {
      status: this.currentComplain.status,
    };

    this.complainService
      .update(this.currentComplain.complaintId, data)
      .then(
        () => (this.message = 'The complain status was updated successfully!')
      )
      .catch((err) => console.log(err));
  }

  deleteComplain(): void {
    // this.complainService
    //   .delete(this.currentComplain.id)
    //   .then(() => {
    //     this.refreshList.emit();
    //     this.message = 'The tutorial was updated successfully!';
    //   })
    //   .catch((err) => console.log(err));
  }
}
