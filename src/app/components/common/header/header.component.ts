import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() userData: user;
  allData: user;

  isActive: boolean;
  
  constructor(private userService: UsersService) { 
    this.isActive = false;
    
  }

  async ngOnInit() { 
    const token = localStorage.getItem("token");
    const decode = jwt_decode(token);
    this.userData = decode['id'];

    this.allData = await this.userService.getById(this.userData);
  }

 

  ngDoCheck(){
    this.isActive = this.userService.getToken();
  }


}


