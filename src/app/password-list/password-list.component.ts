import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent {
  constructor(private router: Router) { }

  passwords = [
    { name: 'Cuenta de correo', hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Otra cuenta', hint: 'Donec lectus sem, mattis eget porta quis, ultrices a tellus.' },
  ];

  goToCreatePassword() {
    this.router.navigate(['/create-password']);
  }
}
