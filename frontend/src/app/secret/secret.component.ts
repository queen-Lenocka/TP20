import { Component, OnInit } from '@angular/core';
import {SecretService} from './secret.service'

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.sass']
})
export class SecretComponent implements OnInit {

  constructor(private secretService: SecretService) { }

  ngOnInit() {
    this.checkToken();
  }

  checkToken()
  {
    this.secretService.checkToken().subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

}
