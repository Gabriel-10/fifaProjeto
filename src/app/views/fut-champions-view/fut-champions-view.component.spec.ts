import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutChampionsViewComponent } from './fut-champions-view.component';

describe('FutChampionsViewComponent', () => {
  let component: FutChampionsViewComponent;
  let fixture: ComponentFixture<FutChampionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutChampionsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutChampionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
