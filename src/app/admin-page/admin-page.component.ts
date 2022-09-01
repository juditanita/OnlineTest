import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  emailid: string = '';
  constructor(public router: Router) {}

  ngOnInit(): void {
    let obj = sessionStorage.getItem('user');
    if (obj != null) {
      this.emailid = obj;
    }
  }
  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['welcome-page']);
  }
}
