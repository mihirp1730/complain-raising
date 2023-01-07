import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainRaisingComponent } from './complain-raising.component';

describe('ComplainRaisingComponent', () => {
  let component: ComplainRaisingComponent;
  let fixture: ComponentFixture<ComplainRaisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainRaisingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainRaisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
