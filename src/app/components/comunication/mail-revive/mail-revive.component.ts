import { Component, OnInit } from '@angular/core';
import { mail } from 'src/app/interfaces/mail.interface';
import { MailingService } from 'src/app/services/mailing.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-mail-revive',
  templateUrl: './mail-revive.component.html',
  styleUrls: ['./mail-revive.component.scss']
})
export class MailReviveComponent implements OnInit {

  userRecibed: number;
  arrMails: mail[];
  userId: number;

  constructor(
    private mailService: MailingService
  ) {}

  ngOnInit() {
    const token = localStorage.getItem("token");
    const decode = jwt_decode(token);
    this.userId = decode['id'];
    this.mailService.getRecibed(this.userId)
      .then(response => {
        this.arrMails = response;
      })
      .catch(error => {
        console.log(error)
      })
  }

  //   getAll(param){
  //   this.userRecibed = 1;
  //   this.mailService.getRecibed(param)
  //   .then(response => {
  //     this.arrMails = response;
  //     console.log(this.arrMails)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   });
  //   console.log(this.arrMails)
  // }
  

}
