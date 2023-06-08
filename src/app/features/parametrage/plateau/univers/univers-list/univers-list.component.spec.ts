import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversListComponent } from './univers-list.component';

describe('UniversListComponent', () => {
  let component: UniversListComponent;
  let fixture: ComponentFixture<UniversListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
