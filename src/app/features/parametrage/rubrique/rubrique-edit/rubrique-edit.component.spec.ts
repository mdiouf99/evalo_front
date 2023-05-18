import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubriqueEditComponent } from './rubrique-edit.component';

describe('RubriqueEditComponent', () => {
  let component: RubriqueEditComponent;
  let fixture: ComponentFixture<RubriqueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubriqueEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubriqueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
