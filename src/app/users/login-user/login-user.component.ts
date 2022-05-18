import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userData: any;
  dataSource: any;
  
  
  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.getUsersByID(102).subscribe((data: any) => {
      this.userData = data;
      this.dataSource = this.userData;



      console.log(this.userData);
    });
  }
  
  displayedColumns: string[] = ['UserID', 'UserName', 'UserPassword', 'UserRoles'];
}

