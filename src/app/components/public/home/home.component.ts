import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  button;
  token;
  destine;
  modal;

  constructor() { }

  ngOnInit(): void {
    this.modal = document.querySelector('.modal');
    this.token = localStorage.getItem('token');
  }

  click(){
    if (this.token === null || this.token === 'undefined') {
      this.modal.style.display = 'block';
    }
  }
  closeModal() {
    this.modal.style.display = 'none';
  }
 
}
