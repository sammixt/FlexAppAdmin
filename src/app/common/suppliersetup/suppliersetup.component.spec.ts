import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersetupComponent } from './suppliersetup.component';

describe('SuppliersetupComponent', () => {
  let component: SuppliersetupComponent;
  let fixture: ComponentFixture<SuppliersetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
