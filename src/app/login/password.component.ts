import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './password.component.html',
})
export class PasswordComponent implements OnInit {
  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.next(true)
  }
}

@Component({
  selector: 'app-recovery-sent',
  templateUrl: './password-sent.component.html',
})
export class PasswordSentComponent implements OnInit {
  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.next(true)
  }
}

@Component({
  selector: 'app-recovery-new',
  templateUrl: './password-new.component.html',
})
export class PasswordNewComponent implements OnInit {
  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.next(true)
  }
}

@Component({
  selector: 'app-recovery-success',
  templateUrl: './password-success.component.html',
})
export class PasswordSuccessComponent implements OnInit {
  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.next(true)
  }
}
