import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  userPassword;
  userName;
  passwords = [('123456'),('password'),('123456789'),
  ('12345678'),('12345'),('111111'),('1234567'),
  ('sunshine'),('qwerty'),('iloveyou')];

  error;

  constructor( private loginService: LoginService, private router: Router ) { }

  ngOnInit() {
    this.userName="";
    this.userPassword="";
  }

  checkPasswords(){
    console.log(this.userPassword);
    for (var i=0; i < this.passwords.length; i++)
    {
      if (this.passwords[i] == this.userPassword)
      {
        console.log("pice");
        break;
      }
    }   
  }

  sentLoginData(){
    if (this.userName == "" || this.userPassword == "")
    {
      console.log("nic si nevyplnil!")
    }
    else
    {
      let data = {
        username: this.userName,
        password: this.userPassword
      }
      console.log(data);
      this.loginService.postDataToServer(data).subscribe(
        response => {
          console.log(response);
          if(response.token === 'false') {
            this.router.navigate(['/login']);
          } else {
            this.router.navigate(['/secret']);
          }
        },
        error => console.log(error)
      );
    }
    
  }

}
