import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollCallManagementComponent } from './roll-call-management.component';

describe('RollCallManagementComponent', () => {
  let component: RollCallManagementComponent;
  let fixture: ComponentFixture<RollCallManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollCallManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollCallManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
