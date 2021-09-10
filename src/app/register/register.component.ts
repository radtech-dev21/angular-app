import { Component } from '@angular/core';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent {
    submit(form:any){
        var fullName = form.fullName;
        console.log(fullName);
      
        var email = form.email;
        console.log(email);
      
        var password = form.password;
        console.log(password);

        var cpassword = form.cpassword;
        console.log(cpassword);
      }
}