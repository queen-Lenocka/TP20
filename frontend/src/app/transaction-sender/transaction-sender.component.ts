import { Component, OnInit } from '@angular/core';
import { TransactionSenderService } from './transaction-sender.service';

@Component({
  selector: 'app-transaction-sender',
  templateUrl: './transaction-sender.component.html',
  styleUrls: ['./transaction-sender.component.sass']
})
export class TransactionSenderComponent implements OnInit {
  dataFromServer;
  error;
  constructor(private messageService: TransactionSenderService) { }

  ngOnInit() {
    this.getTestData();
  }

  getTestData() {
    this.messageService.getResponseFromServer().subscribe(
      data => {
        this.dataFromServer = data.testMessages;
        console.log(data);
      },
      error => this.error
    );
  }
}
