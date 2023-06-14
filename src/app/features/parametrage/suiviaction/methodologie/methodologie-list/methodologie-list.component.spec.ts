import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodologieListComponent } from './methodologie-list.component';

describe('MethodologieListComponent', () => {
  let component: MethodologieListComponent;
  let fixture: ComponentFixture<MethodologieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodologieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodologieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
