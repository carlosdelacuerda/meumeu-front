import { Component, OnInit } from '@angular/core';
import { mail } from 'src/app/interfaces/mail.interface';
import { MailingService } from 'src/app/services/mailing.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-mail-send',
  templateUrl: './mail-send.component.html',
  styleUrls: ['./mail-send.component.scss']
})
export class MailSendComponent implements OnInit {

  userSend: number;
  arrMails: mail[];
  userId: number;


  constructor(private mailService: MailingService) { }

  ngOnInit() {
    const token = localStorage.getItem("token");
    const decode = jwt_decode(token);
    this.userId = decode['id'];
    this.mailService.getSend(this.userId)
      .then(response => {
        this.arrMails = response;
        console.log(this.arrMails)
      })
      .catch(error => {
        console.log(error)
      })

      
  }

}
