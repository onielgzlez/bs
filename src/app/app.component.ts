import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Berband System';
  showDash = true;

  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.subscribe(rendered => {
      this.showDash = !rendered
    })
  }  
}
