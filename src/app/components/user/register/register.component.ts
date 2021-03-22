import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { user } from '../../../interfaces/user.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public users:user [];
  public user: user;

  // formUser: user;
  
  constructor(private usersService: UsersService) { 



  }


  ngOnInit(): void {
  }



  async onSubmit(pForm) {
    await this.usersService.create(pForm); 
    }

  

}
