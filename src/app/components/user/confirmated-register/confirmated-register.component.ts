import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmated-register',
  templateUrl: './confirmated-register.component.html',
  styleUrls: ['./confirmated-register.component.scss']
})
export class ConfirmatedRegisterComponent {

  constructor(
    private router: Router,
    private zone: NgZone
  ) { }

  ngAfterViewInit(): void {
    // this.zone.run(() => {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  // });
  }
  

}
