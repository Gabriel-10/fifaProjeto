import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivalsViewComponent } from './rivals-view.component';

describe('RivalsViewComponent', () => {
  let component: RivalsViewComponent;
  let fixture: ComponentFixture<RivalsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RivalsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RivalsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
