import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/services/users/mock-user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})



export class RegisterUserComponent implements OnInit {

  data: any;
  genForm: any;
  user: IUser | undefined;

  

  constructor(private http: HttpClient,
    private userService: UserService,
    private fb: FormBuilder) {

  }



  ngOnInit(): void {
    
    const role: string = 'User';
    const pass: string = '123';
    const email: string = 'mail@mail.com';


    this.fb = new FormBuilder();
    this.genForm = this.fb.group({
      UserID: new FormControl(0),
      UserName: new FormControl(''),
      UserPassword: new FormControl(pass),
      UserRoles: new FormControl(role),
      UserEmailID: new FormControl(email),
    });
    

    console.log(this.genForm.value)


  }

  fillData() {

    this.user = {
      UserID: this.genForm.value.UserID,
      UserName: this.genForm.value.UserName,
      UserPassword: this.genForm.value.UserPassword,
      UserRoles: this.genForm.value.UserRoles,
      UserEmailID: this.genForm.value.UserEmailID
    }

    console.log(this.user);
  }


  submit() {

    try {
      this.userService.createUser(this.user).subscribe((data: any) => {
        //alert(this.quote);
        //this.quote = data;
        console.log("User Added");
      });
    } catch (err: any) {
      console.log("Error With Post", err)
    }
  }
}
