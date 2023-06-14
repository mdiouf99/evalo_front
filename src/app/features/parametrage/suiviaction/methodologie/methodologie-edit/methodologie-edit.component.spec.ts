import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodologieEditComponent } from './methodologie-edit.component';

describe('MethodologieEditComponent', () => {
  let component: MethodologieEditComponent;
  let fixture: ComponentFixture<MethodologieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodologieEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodologieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
