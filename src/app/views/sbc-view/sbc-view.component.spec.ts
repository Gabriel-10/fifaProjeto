import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBCViewComponent } from './sbc-view.component';

describe('SBCViewComponent', () => {
  let component: SBCViewComponent;
  let fixture: ComponentFixture<SBCViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBCViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBCViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
