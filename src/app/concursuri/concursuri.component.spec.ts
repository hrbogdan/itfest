import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursuriComponent } from './concursuri.component';

describe('ConcursuriComponent', () => {
  let component: ConcursuriComponent;
  let fixture: ComponentFixture<ConcursuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcursuriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
