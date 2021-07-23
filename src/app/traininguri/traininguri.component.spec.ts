import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraininguriComponent } from './traininguri.component';

describe('TraininguriComponent', () => {
  let component: TraininguriComponent;
  let fixture: ComponentFixture<TraininguriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraininguriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraininguriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
