import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerListComponent } from './interviewer-list';

describe('InterviewerList', () => {
  let component: InterviewerListComponent;
  let fixture: ComponentFixture<InterviewerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
