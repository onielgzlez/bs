import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.teamPageRendered.next(true);
  }

  show() {
    const contenido = document.getElementById('contenido_oculto');
    if (contenido?.className === 'is-hidden') {
      contenido?.classList.remove('is-hidden');
    }
  }
}
