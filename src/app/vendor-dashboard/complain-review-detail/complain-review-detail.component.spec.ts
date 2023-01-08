import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainReviewDetailComponent } from './complain-review-detail.component';

describe('ComplainReviewDetailComponent', () => {
  let component: ComplainReviewDetailComponent;
  let fixture: ComponentFixture<ComplainReviewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainReviewDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
