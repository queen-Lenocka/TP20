import { TestBed } from '@angular/core/testing';

import { TransactionSenderService } from './transaction-sender.service';

describe('TransactionSenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionSenderService = TestBed.get(TransactionSenderService);
    expect(service).toBeTruthy();
  });
});
