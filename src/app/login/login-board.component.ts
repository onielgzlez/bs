import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login-board',
  templateUrl: './login-board.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginBoardComponent implements OnInit {
  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.next(true)
  }
}
