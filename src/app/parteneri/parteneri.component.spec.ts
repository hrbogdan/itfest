import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteneriComponent } from './parteneri.component';

describe('ParteneriComponent', () => {
  let component: ParteneriComponent;
  let fixture: ComponentFixture<ParteneriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteneriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteneriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
