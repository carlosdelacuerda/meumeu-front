import { Component, OnInit } from '@angular/core';
import { mail } from 'src/app/interfaces/mail.interface';
import { MailingService } from 'src/app/services/mailing.service';

@Component({
  selector: 'app-inbox-detail',
  templateUrl: './inbox-detail.component.html',
  styleUrls: ['./inbox-detail.component.scss']
})
export class InboxDetailComponent implements OnInit {

  firstMail: mail;
  id: number;
  url: string;
  positionId: number;
  arrChat: mail[];
  controlSender: number;


  constructor(
    private mailService: MailingService
  ) {
    
  }

  ngOnInit(): void {
    this.url = window.location.href;
    const arrId = this.url.split('/');
    this.positionId = arrId.length-1;
    const urlFinal = arrId[this.positionId];
    this.mailService.byId(urlFinal)
      .then(response => {
        this.firstMail = response;
      })
      .catch(error => {
        console.log(error)
      });

      this.mailService.byMail(urlFinal)
        .then(response => {
          this.arrChat = response;
        })
        .catch(error => {
          console.log(error)
        })
    }

    async onSubmit(pForm) {
      pForm.fk_message = this.firstMail.id;
      await this.mailService.create(pForm); 
      }
    

  }



  


