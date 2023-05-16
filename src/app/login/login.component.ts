import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.next(true)
  }
}
