import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PasswordService } from './create.service';
import { IPassword } from '../models/password';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent {
  name: string = '';
  password: string = '';
  confirmPassword: string = '';
  hint: string = '';

  constructor(private router: Router, 
    private createService: PasswordService,
    private toastr: ToastrService) { }

  onSubmit() {
    this.toastr.success("Confirmación", "Clave creada", {positionClass: 'toast-bottom-left'});
    setTimeout(() => {
      alert('Clave creada con éxito');
      this.router.navigate(['/passwords']);
    }, 1000);
  }

  onCancel() {
    this.router.navigate(['/passwords']);
  }

  public createPassword(): void{
    var password : IPassword = {
      name: this.name,
      password: this.password,
      hint: this.hint
    }
    this.createService.createPassword(password).subscribe(
      passwordResult => {
        this.toastr.success("Confirmación", "Clave creada", {positionClass: 'toast-bottom-left'})
        console.log("Creada con éxito")
      }
    )
  }
}
