import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ComplainService } from 'src/app/shared/complain-service.service';

@Component({
  selector: 'app-complain-review',
  templateUrl: './complain-review.component.html',
  styleUrls: ['./complain-review.component.scss'],
})
export class ComplainReviewComponent {
  complains: any;
  currentComplain = null;
  currentIndex = -1;
  title = '';

  constructor(public complainService: ComplainService) {
    this.retriveAllComplains();
  }

  refreshList(): void {
    this.currentComplain = null;
    this.currentIndex = -1;
    this.retriveAllComplains();
  }

  // retriveAllComplains() {
  //   const res = this.complainService.getAllComplains();
  //   console.log(res);
  // }

  retriveAllComplains(): void {
    this.complainService
      .getAllComplains()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.complains = data;
        console.log(this.complains);
      });
  }

  setActiveComplain(complain: any, index: any): void {
    this.currentComplain = complain;
    this.currentIndex = index;
  }
}
