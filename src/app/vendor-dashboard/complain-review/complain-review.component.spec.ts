import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainReviewComponent } from './complain-review.component';

describe('ComplainReviewComponent', () => {
  let component: ComplainReviewComponent;
  let fixture: ComponentFixture<ComplainReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
