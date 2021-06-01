import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfFormComponent } from './rf-form.component';

describe('RfFormComponent', () => {
  let component: RfFormComponent;
  let fixture: ComponentFixture<RfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
