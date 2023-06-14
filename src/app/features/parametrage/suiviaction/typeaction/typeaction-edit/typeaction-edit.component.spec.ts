import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeactionEditComponent } from './typeaction-edit.component';

describe('TypeactionEditComponent', () => {
  let component: TypeactionEditComponent;
  let fixture: ComponentFixture<TypeactionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeactionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeactionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
