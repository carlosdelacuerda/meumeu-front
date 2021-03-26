import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { user } from '../../../interfaces/user.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public users:user[];
  public user: user;

  formulario: FormGroup;
  files: any[];

  nameFail;
  emailFail;
  passwordFail;
  checkFail;
  preview;
  noPicture: string = "../../../../assets/images/no-user.svg";

  // formUser: user;
  
  constructor(
    private usersService: UsersService,
    private router: Router) {
       

  }


  ngOnInit(): void {

    this.nameFail = document.querySelector('.name-fail');
    this.emailFail = document.querySelector('.email-fail');
    this.passwordFail = document.querySelector('.password-fail');
    this.checkFail = document.querySelector('.check-fail');

    this.formulario = new FormGroup({
      username: new FormControl(),
      description: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repeatPassword: new FormControl(),
      checkBox: new FormControl()
    })

  }



  // async onSubmit() {
  //   await this.usersService.create; 
  //   }


    onSubmit() {
     // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
      let fd = new FormData();
      // if (this.files === null) {
      //   let reader = new FileReader();
      //   reader.readAsDataURL(new File (this.noPicture));
      //   fd.append('picture', this.noPicture);
      // }
      if (this.files && this.files.length > 0) {
        fd.append('picture', this.files[0]);
      }
      fd.append('username', this.formulario.value.username);
      fd.append('password', this.formulario.value.password);
      fd.append('email', this.formulario.value.email);
    
  
      
      
    if (this.formulario.value.password != this.formulario.value.repeatPassword) {
      this.passwordFail.style.opacity = 1;
    } else if (this.formulario.value.checkBox === false) { 
      this.checkFail.style.opacity = 1;
    } else {
      // Delegamos el envío del formulario en el servicio
      this.usersService.create(fd).then(result => {
        if(result === 'errorName') {
          this.nameFail.style.opacity = 1;
        } else if (result === 'errorEmail') {
          this.emailFail.style.opacity = 1;
        } else {
        this.router.navigate(['/confirmationRegister']);
        }
      })
    }


    }
  
    onChange($event) {

      this.files = $event.target.files;

        // Creamos el objeto de la clase FileReader
        let reader = new FileReader();
      
        // Leemos el archivo subido y se lo pasamos a nuestro fileReader
        reader.readAsDataURL(this.files[0]);
      
        // Le decimos que cuando este listo ejecute el código interno
        reader.onload = () => {
          let fpreview = document.getElementById('preview')
        
          this.preview = fpreview
      
          this.preview.src = reader.result;
      
          this.preview.innerHTML = '';
          this.preview.append(Image);
        };
    }
  

}
