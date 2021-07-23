import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferinteComponent } from './conferinte.component';

describe('ConferinteComponent', () => {
  let component: ConferinteComponent;
  let fixture: ComponentFixture<ConferinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
