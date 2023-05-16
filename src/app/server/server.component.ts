import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() columns: any;
  @Input() values: any;
  @Input() class: String | undefined;

  ngOnInit(): void {
    this.columns = [
      {
        field: 'id',
        label: 'ID',
        class: 'has-text-left',
      },
      {
        field: 'path',
        label: 'Ruta',
        class: 'has-text-left',
      },
      {
        field: 'service',
        label: 'Servicio',
        class: 'has-text-left',
      },
      {
        field: 'status',
        label: 'Estado',
        class: 'has-text-left',
      },
      {
        field: 'created_at',
        label: 'Creación',
        class: 'has-text-left',
      },
      {
        field: 'actions',
        label: 'Vulnerabilidades',
      },
    ];
    this.values = [
      {
        class: 'is-bordered-bottom py-3 px-3',
        values: [
          {
            field: 'id',
            value: 3,
          },
          {
            field: 'path',
            value: '10.345.257.56',
            class: 'py-4',
          },
          {
            field: 'service',
            value: 'Sistemas Wireless',
          },
          {
            field: 'status',
            value: 'Asignado',
          },
          {
            field: 'created_at',
            value: '03/11/2022',
          },
          {
            field: 'actions',
            value: 'Ver',
            type: 'link',
            link: '/vulnerabilidades',
            linkClass: 'has-button-hover-sm has-no-decoration',
          },
        ],
      },
      {
        class: 'is-bordered-bottom py-3 px-3',
        values: [
          {
            field: 'id',
            value: 4,
          },
          {
            field: 'path',
            value: '10.456.174.36',
            class: 'py-4',
          },
          {
            field: 'service',
            value: 'CISO as a service',
          },
          {
            field: 'status',
            value: 'Asignado',
          },
          {
            field: 'created_at',
            value: '02/11/2022',
          },
          {
            field: 'actions',
            value: 'Ver',
            type: 'link',
            link: '/vulnerabilidades',
            linkClass: 'has-button-hover-sm has-no-decoration',
          },
        ],
      },
    ];
    this.class =
      'card px-3 is-fullwidth table is-size-6 is-relative has-left-border has-border-left-gradient has-shadow';
  }
}
