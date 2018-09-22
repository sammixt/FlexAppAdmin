import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscrowaccountComponent } from './escrowaccount.component';

describe('EscrowaccountComponent', () => {
  let component: EscrowaccountComponent;
  let fixture: ComponentFixture<EscrowaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscrowaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscrowaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
