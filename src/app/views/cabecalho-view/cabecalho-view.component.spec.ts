import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoViewComponent } from './cabecalho-view.component';

describe('CabecalhoViewComponent', () => {
  let component: CabecalhoViewComponent;
  let fixture: ComponentFixture<CabecalhoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
