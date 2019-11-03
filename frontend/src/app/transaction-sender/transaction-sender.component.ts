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
  visa;
  constructor(private messageService: TransactionSenderService) { }

  ngOnInit() {
    this.getTestData();
    this.visa = '';
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

  sendTestData() {
    console.log('test!');
    let data = {type: this.visa};
    this.messageService.postDataToServer(data).subscribe(
      response => console.log(response),
      error => this.error
    );
  }
}
