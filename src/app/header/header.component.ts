import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  active = '';
  isOpen = false;

  toogleActive(isOpen: boolean) {
    this.isOpen = !isOpen

    if (this.isOpen) {
      this.active = 'is-active'
    } else {
      this.active = ''
    }
  }
}
