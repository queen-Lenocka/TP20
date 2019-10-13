import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSenderComponent } from './transaction-sender.component';

describe('TransactionSenderComponent', () => {
  let component: TransactionSenderComponent;
  let fixture: ComponentFixture<TransactionSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
