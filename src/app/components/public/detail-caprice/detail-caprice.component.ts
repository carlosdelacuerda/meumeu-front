import { Component, Input, OnInit } from '@angular/core';
import { desireDetail } from 'src/app/interfaces/desireDetail.interface';
import { CapricesService } from 'src/app/services/caprices.service';
import jwt_decode from 'jwt-decode';
import { user } from 'src/app/interfaces/user.interface';
import { mail } from 'src/app/interfaces/mail.interface';
import { MailingService } from 'src/app/services/mailing.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { baseUrl } from 'src/app/services/baseUrl';


@Component({
  selector: 'app-detail-caprice',
  templateUrl: './detail-caprice.component.html',
  styleUrls: ['./detail-caprice.component.scss']
})
export class DetailCapriceComponent implements OnInit {
  @Input() userData: user;
  allData: user;

  myCountry: string;
  newMail: mail;
  baseUrl: string = baseUrl;

  myDesire: desireDetail;
  myId: number;
  url: string;
  positionId: number;
  modalContact;
  modalLogin;
  token;

  constructor(
    private desireService: CapricesService,
    private mailService: MailingService,
    private router: Router,
    private userService: UsersService
    ) {

   }

  async ngOnInit() { 
      this.modalContact = document.querySelector(".modalContact");
      this.modalLogin = document.querySelector(".modalLogin");
      this.url = window.location.href;
      const arrId = this.url.split('/');
      this.positionId = arrId.length-1;
      const urlFinal = arrId[this.positionId];
      this.myDesire = await this.desireService.byId(urlFinal);

  } 

  showModal(){
    if (this.token) {
    this.modalContact.style.display = "block";
    }
    this.modalLogin.style.display = "block";
  }

  closeModal(){
    this.modalContact.style.display = "none";
    this.modalLogin.style.display = "none";
  }

  async onSubmit(pForm) {
    const token = localStorage.getItem("token");
    const decode = jwt_decode(token);
    this.userData = decode['id'];
    // this.allData = await this.userService.getById(this.userData);
    pForm.fk_user_r = this.myDesire.user_id;
    pForm.fk_user_e = this.userData;
    pForm.fk_desire = this.myDesire.id;
    await this.mailService.create(pForm); 
    }
}
