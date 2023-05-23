import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilParametrageComponent } from './accueil-parametrage.component';

describe('AccueilParametrageComponent', () => {
  let component: AccueilParametrageComponent;
  let fixture: ComponentFixture<AccueilParametrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilParametrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilParametrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
