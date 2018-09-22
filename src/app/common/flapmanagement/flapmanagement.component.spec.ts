import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlapmanagementComponent } from './flapmanagement.component';

describe('FlapmanagementComponent', () => {
  let component: FlapmanagementComponent;
  let fixture: ComponentFixture<FlapmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlapmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlapmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
