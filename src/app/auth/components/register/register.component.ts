import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  // registerSubmit(){
  //   let users= this.registerForm.value;
  //   this.loginservice.register(users.username, users.password, users.confirmpassword).then(res=>{
  //     console.log(res);
  //     this.notificationservice.openSnackBar("Registration Successful!");
         
  //   }, (err)=>{
  //     this.notificationservice.openSnackBar("Registration Failed!   " + err.message);
     
  //   })
  // }

}
