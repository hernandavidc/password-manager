import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  onSubmit() {
    setTimeout(() => {
      alert('Clave creada con éxito');
      this.router.navigate(['/passwords']);
    }, 1000);
  }

  onCancel() {
    this.router.navigate(['/passwords']);
  }
}
