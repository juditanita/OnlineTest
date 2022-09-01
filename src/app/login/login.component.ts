import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  msg: string = '';
  constructor(public router: Router) {}

  ngOnInit(): void {}

  checkUser(loginRef: NgForm) {
    let login = loginRef.value;
    if (login.emailid == 'admin34@gmail.com' && login.password == '123') {
      sessionStorage.setItem('user', login.emailid);
      this.router.navigate(['admin-page'], { skipLocationChange: true });
    } else {
      this.msg = 'Something went wrong';
      alert(this.msg);
    }
  }
}
