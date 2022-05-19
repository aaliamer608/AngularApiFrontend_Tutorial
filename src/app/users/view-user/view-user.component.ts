import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userData: any;
  dataSource: any;
  
  
  isLoggedIn: boolean = false;


  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.getUsersByID(102).subscribe((data: any) => {
      this.userData = data;
      this.dataSource = this.userData;

      console.log(this.userData);
    });
  }


  

  login() {
    if (this.isLoggedIn == true) {
      console.log('Already Logged In');
    } else {
      this.isLoggedIn = true;
      console.log('Logged In');
    }
  }

  logout() {
    if (this.isLoggedIn == false) {
      console.log('Already Logged Out');
    } else {
      this.isLoggedIn = false;
      console.log('Logged Out');
    }
  }
  
  displayedColumns: string[] = ['UserID', 'UserName', 'UserPassword', 'UserRoles', 'UserEmailID'];
}

