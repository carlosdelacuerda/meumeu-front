import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { caprice } from 'src/app/interfaces/caprice.interface';
import { CapricesService } from 'src/app/services/caprices.service';
import jwt_decode from 'jwt-decode';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-caprice',
  templateUrl: './form-caprice.component.html',
  styleUrls: ['./form-caprice.component.scss']
})
export class FormCapriceComponent implements OnInit {

  myCountry: string;
  newDesire: caprice;
  files: any[];
  formulario: FormGroup;

  constructor(
    private capricesService: CapricesService,
    private router: Router
  ) { 
    this.newDesire = {
    };
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      title: new FormControl(),
      notes: new FormControl()
    })
  }

  eventCountry(country){
    this.myCountry = country;
  }


  // async onSubmit(pForm) {
  //   const token = localStorage.getItem("token");
  //   const decode = jwt_decode(token);
  //   pForm.user_id = decode['id'];
  //   pForm.country = this.myCountry;
  //   await this.capricesService.create(pForm); 
  //   }

    onSubmit() {
      // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
      const token = localStorage.getItem("token");
       const decode = jwt_decode(token);

       let fd = new FormData();

       fd.append('user_id', decode['id']);
       fd.append('country', this.myCountry);
       fd.append('image', this.files[0]);
       fd.append('title', this.formulario.value.title);
       fd.append('date', '2000-01-01');
       fd.append('notes', this.formulario.value.notes);
   
   
       // Delegamos el envío del formulario en el servicio
       this.capricesService.create(fd).then(result => {
         this.router.navigate(['/listCaprice']);
       })
     }
   
     upLoad($event) {
       this.files = $event.target.files;
    
     }


}
