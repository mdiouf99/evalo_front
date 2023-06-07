import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemToRubriqueComponent } from './add-item-to-rubrique.component';

describe('AddItemToRubriqueComponent', () => {
  let component: AddItemToRubriqueComponent;
  let fixture: ComponentFixture<AddItemToRubriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemToRubriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemToRubriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
