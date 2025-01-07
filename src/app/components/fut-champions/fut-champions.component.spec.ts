import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutChampionsComponent } from './fut-champions.component';

describe('FutChampionsComponent', () => {
  let component: FutChampionsComponent;
  let fixture: ComponentFixture<FutChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutChampionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
