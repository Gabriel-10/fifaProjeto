import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBCComponent } from './sbc.component';

describe('SBCComponent', () => {
  let component: SBCComponent;
  let fixture: ComponentFixture<SBCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
