import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSlotModal } from './book-slot-modal';

describe('BookSlotModal', () => {
  let component: BookSlotModal;
  let fixture: ComponentFixture<BookSlotModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSlotModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSlotModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
