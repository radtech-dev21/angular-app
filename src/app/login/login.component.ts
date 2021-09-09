import { Component } from '@angular/core';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent {
    submit(form:any){      
        var email = form.email;
        console.log(email);
      
        var password = form.password;
        console.log(password);
      }
}