import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviactionComponent } from './suiviaction.component';

describe('SuiviactionComponent', () => {
  let component: SuiviactionComponent;
  let fixture: ComponentFixture<SuiviactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
