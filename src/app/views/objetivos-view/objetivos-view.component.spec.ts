import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosViewComponent } from './objetivos-view.component';

describe('ObjetivosViewComponent', () => {
  let component: ObjetivosViewComponent;
  let fixture: ComponentFixture<ObjetivosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivosViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetivosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
