import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user.interface';
import jwt_decode from 'jwt-decode';
import { UsersService } from 'src/app/services/users.service';
import { baseUrl } from 'src/app/services/baseUrl';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() userData: user;
  allData: user;
  baseUrl: string = baseUrl;

  constructor(private userService: UsersService) { }

  async ngOnInit() { 
    const token = localStorage.getItem("token");
    const decode = jwt_decode(token);
    this.userData = decode['id'];

    this.allData = await this.userService.getById(this.userData);
  }

  onClick() {
    localStorage.clear();
  }

}
