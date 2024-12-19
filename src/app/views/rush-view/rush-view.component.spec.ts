import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushViewComponent } from './rush-view.component';

describe('RushViewComponent', () => {
  let component: RushViewComponent;
  let fixture: ComponentFixture<RushViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RushViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RushViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
