import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  users;

  constructor(
    public userService: UsersService
  ) { }

  ngOnInit(): void {
    // localStorage.removeItem('token');
    // console.log(localStorage);
  }

  async onLogin(pForm) {
    const user = {username: pForm.username, password: pForm.password};
    const message = await this.userService.login(user);
    let newtoken = message.token;
    if(message.token) {
      localStorage.setItem('token' , newtoken);
      this.userService.loginComplete();
    }
  }




}
