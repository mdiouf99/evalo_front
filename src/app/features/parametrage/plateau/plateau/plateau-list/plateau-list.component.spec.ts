import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateauListComponent } from './plateau-list.component';

describe('PlateauListComponent', () => {
  let component: PlateauListComponent;
  let fixture: ComponentFixture<PlateauListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateauListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlateauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
