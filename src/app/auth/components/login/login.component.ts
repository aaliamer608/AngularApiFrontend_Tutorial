import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';
// import { AuthService } from 'src/app/shared/services/auth.service';
// import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
// import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: any;
  dataSource: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe((data) => {
      this.userData = data;
      this.dataSource = this.userData;
      console.log(data);
    });
  }
  displayedColumns: string[] = ['UserID', 'UserName', 'UserRoles', 'UserEmailID'];
}

