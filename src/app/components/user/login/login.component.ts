import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

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
    localStorage.setItem('token' , newtoken);

  

   
  }

}
