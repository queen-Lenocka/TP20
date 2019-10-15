import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReceiverComponent } from './transaction-receiver.component';

describe('TransactionReceiverComponent', () => {
  let component: TransactionReceiverComponent;
  let fixture: ComponentFixture<TransactionReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
