import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/services/baseUrl';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() userData: user;
  allData: user;

  isActive: boolean;
  users$: Observable<boolean>;
  baseUrl: string = baseUrl;
  
  constructor(private userService: UsersService) { 
    this.users$ = this.userService.getLogged$();
    this.users$.subscribe(async ()=>{
      const token = localStorage.getItem("token");
      const decode = jwt_decode(token);
      this.userData = decode['id'];
      this.allData = await this.userService.getById(this.userData);

    })
  }

  async ngOnInit() { 
    const token = localStorage.getItem("token");
    const decode = jwt_decode(token);
    this.userData = decode['id'];

    this.allData = await this.userService.getById(this.userData);
  }

 

  ngDoCheck(){
    if (this.userData != "undefined")
    this.isActive = this.userService.getToken();
  }


}


