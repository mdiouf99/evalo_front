import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversEditComponent } from './univers-edit.component';

describe('UniversEditComponent', () => {
  let component: UniversEditComponent;
  let fixture: ComponentFixture<UniversEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
