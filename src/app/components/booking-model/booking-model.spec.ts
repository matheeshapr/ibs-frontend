import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingModel } from './booking-model';

describe('BookingModel', () => {
  let component: BookingModel;
  let fixture: ComponentFixture<BookingModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
