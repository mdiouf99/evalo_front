import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateauEditComponent } from './plateau-edit.component';

describe('PlateauEditComponent', () => {
  let component: PlateauEditComponent;
  let fixture: ComponentFixture<PlateauEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateauEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlateauEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
