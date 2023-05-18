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

@Component({
  selector: 'app-login-onboard',
  templateUrl: './login-onboard.component.html',
})
export class LoginOnBoardingComponent implements OnInit {
  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.next(true)
  }
}

@Component({
  selector: 'app-login-demo',
  templateUrl: './login-demo.component.html',
})
export class LoginDemoComponent implements OnInit {
  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.next(true)
  }
}

@Component({
  selector: 'app-login-resume',
  templateUrl: './login-resume.component.html',
})
export class LoginResumeComponent implements OnInit {
  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.next(true)
  }
}
