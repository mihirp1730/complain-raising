import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplainReviewDetailComponent } from './complain-review-detail/complain-review-detail.component';
import { ComplainReviewComponent } from './complain-review/complain-review.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ComplainReviewDetailComponent, ComplainReviewComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class VendorDashboardModule {}
