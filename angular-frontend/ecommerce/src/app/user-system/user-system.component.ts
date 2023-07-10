import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-system',
  templateUrl: './user-system.component.html',
  styleUrls: ['./user-system.component.css']
})
export class UserSystemComponent implements OnInit {

  ngOnInit(): void {
    
  }
  
  constructor(private router: Router) {}

  users: any[] = [
    { usuario: 'ed', senha: '123456' },
    { usuario: 'francisco', senha: '123456' },
    { usuario: 'diego', senha: '123456' },
    { usuario: 'gustavo', senha: '123456' }
  ]; 

  userInput: string = ''; 
  passwordInput: string = ''; 
  loginMessage: string = ''; 
  exibirMensagemErro: boolean = false;

  realizarLogin(): void {
    const usuario = this.userInput;
    const senha = this.passwordInput;

    const userFound = this.users.find((u) => u.usuario === usuario && u.senha === senha);
  
    if (userFound) {
      this.exibirMensagemErro = false;
      this.router.navigate(['help-request-list']);
    } else {
      this.loginMessage = 'Usuário ou senha incorretos';
      this.exibirMensagemErro = true;
      setTimeout(() => {
        this.exibirMensagemErro = false;
      }, 5000);
    }
  }

}
