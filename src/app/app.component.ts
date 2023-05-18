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
  showMenu = false;

  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.subscribe(rendered => {
      this.showDash = !rendered
    })
    this.myService.teamPageRendered.subscribe(rendered => {
      this.showMenu = rendered
    })
  }

  hide() {
    const contenido = document.getElementById('contenido_oculto');
    if (contenido?.className !== 'is-hidden') {
      contenido?.classList.add('is-hidden');
    }
  }

  showModal() {
    const modal = document.getElementById('contrasena');
    if (modal?.className !== 'is-active') {
      modal?.classList.add('is-active');
    }
  }
}
