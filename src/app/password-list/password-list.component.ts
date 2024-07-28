import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPassword } from '../models/password';
import { PasswordService } from './get.service';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent {

  public passwordsL : Array<IPassword> = []

  constructor(private router: Router, private passwordService: PasswordService) { }

  passwords = [
    { name: 'Cuenta de correo', hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Otra cuenta', hint: 'Donec lectus sem, mattis eget porta quis, ultrices a tellus.' },
  ];

  ngOnInit() {
    // this.getPasswords();
  }

  private getPasswords() : void {
    this.passwordService.getPasswords().subscribe(passwords => {
      this.passwordsL = passwords;
    })
  }

  goToCreatePassword() {
    this.router.navigate(['/create-password']);
  }
}
