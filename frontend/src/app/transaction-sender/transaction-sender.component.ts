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
  inputFields;
  arr;
  constructor(private messageService: TransactionSenderService) { }

  ngOnInit() {
    this.getTestData();
    this.visa = '';
    this.getInputFields();
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

  // get input fields
  getInputFields() {
    this.inputFields = this.messageService.getInputFields();
    console.log("RECEIVED dummy data");
    console.log(this.inputFields);
  }

  // send data from input fields
  sendForm() {
    // send only fields ID and value
    let data = {type: this.inputFields.map(({id, value}) => ({id, value}))};
    this.messageService.sendForm(data);
  }
}
