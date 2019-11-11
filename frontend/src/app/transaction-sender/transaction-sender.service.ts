import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionSenderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getResponseFromServer(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/test');
  }

  postDataToServer(data): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/test', JSON.stringify(data), this.httpOptions);
  }

  // get input fields
  getInputFields(): any {
    // for now, fields properties are hardcoded, there is no call to backend yet
    let inputFields = [
      {id: 1, label: "label1", whatever: "qwe"},
      {id: 2, label: "label2", whatever: "asd"},
      {id: 4, label: "label3", whatever: "zxc"},
    ];
    console.log("TODO: get input fields from server");
    return inputFields;
  }

  // send data from input fields
  sendForm(data): void {
    // for now, there is no call to backend yet
    console.log("TODO: send fields ID and value to server");
    console.log(data);
    console.log("SENT dummy data");
  }
}
