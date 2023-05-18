import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
})
export class AssignmentComponent {
  bugs = {
    class:
      'table is-fullwidth p-4 is-radius is-size-6 mb-4 is-relative has-left-border is-clipped has-border-left-gradient has-shadow',
    columns: [
      {
        field: '#',
        label: 'check-all',
        type: 'check',
        class: 'has-text-centered',
      },
      {
        field: 'id',
        label: 'ID',
      },
      {
        field: 'title',
        label: 'Nombre',
      },
      {
        field: 'project',
        label: 'Proyecto',
      },
      {
        field: 'service',
        label: 'Servicio',
      },
      {
        field: 'assign',
        label: 'Asignado a',
      },
      {
        field: 'start_date',
        label: 'Fecha de inicio',
      },
      {
        field: 'host',
        label: 'Host',
      },
      {
        field: 'status',
        label: 'Estado',
      },
      {
        field: 'priority',
        label: 'Prioridad',
        class: 'has-text-centered',
      },
    ],
    values: [
      {
        values: [
          {
            field: '#',
            type: 'check',
            class: 'has-text-centered',
          },
          {
            field: 'id',
            value: '12',
          },
          {
            field: 'title',
            value:
              'Oracle Solaris critical patch update - oct2020_SCRUTI_3_33_26_0',
            class: 'is-ellipsis',
            type: 'btn',
            btnClass:
              'has-background-transparent has-text-left is-clickable is-borderless has-button-hover js-modal-trigger',
            btnTarget: 'detalle_tarea',
          },
          {
            field: 'project',
            value: 'Prueba tomas',
          },
          {
            field: 'service',
            value: 'Éthical Hacking',
          },
          {
            field: 'assing',
            value: 'Pedro Soto',
          },
          {
            field: 'start_date',
            value: '09/11/2022',
          },
          {
            field: 'host',
            value: '20.102.04',
          },
          {
            field: 'status',
            value: 'Detectada',
            class: 'has-background-status-det',
          },
          {
            field: 'priority',
            value: 'Crítico',
            class: 'has-text-centered',
            type: 'tooltip',
            tipClass:
              'has-tooltip-active has-tooltip-top is-relative is-size-5 has-text-danger',
            iconClass: 'las la-bug mr-1',
          },
        ],
      },
      {
        values: [
          {
            field: '#',
            type: 'check',
            class: 'has-text-centered',
          },
          {
            field: 'id',
            value: '13',
          },
          {
            field: 'title',
            value: 'Apache 2.4.x < 2.4.47 Multiple Vulnerabilities',
            class: 'is-ellipsis',
            type: 'btn',
            btnClass:
              'has-background-transparent has-text-left is-clickable is-borderless has-button-hover',
            btnTarget: 'detalle_tarea',
          },
          {
            field: 'project',
            value: 'Rebot452',
          },
          {
            field: 'service',
            value: 'Éthical Hacking',
          },
          {
            field: 'assing',
            value: 'Pedro Soto',
          },
          {
            field: 'start_date',
            value: '08/11/2022',
          },
          {
            field: 'host',
            value: '20.102.04',
          },
          {
            field: 'status',
            value: 'Detectada',
            class: 'has-background-status-det',
          },
          {
            field: 'priority',
            value: 'Medio',
            class: 'has-text-centered',
            type: 'tooltip',
            tipClass:
              'has-tooltip-active has-tooltip-top is-relative is-size-5 has-text-warning',
            iconClass: 'las la-bug mr-1',
          },
        ],
      },
      {
        values: [
          {
            field: '#',
            type: 'check',
            class: 'has-text-centered',
          },
          {
            field: 'id',
            value: '14',
          },
          {
            field: 'title',
            value: 'Cifrado SSL de Median Fortaleza (SWEET32)',
            class: 'is-ellipsis',
            type: 'btn',
            btnClass:
              'has-background-transparent has-text-left is-clickable is-borderless has-button-hover',
            btnTarget: 'detalle_tarea',
          },
          {
            field: 'project',
            value: 'CenterMedical Backup',
          },
          {
            field: 'service',
            value: 'Éthical Hacking',
          },
          {
            field: 'assing',
            value: 'Pedro Soto',
          },
          {
            field: 'start_date',
            value: '07/11/2022',
          },
          {
            field: 'host',
            value: 'portal.com',
          },
          {
            field: 'status',
            value: 'Detectada',
            class: 'has-background-status-det',
          },
          {
            field: 'priority',
            value: 'Bajo',
            class: 'has-text-centered',
            type: 'tooltip',
            tipClass:
              'has-tooltip-active has-tooltip-top is-relative is-size-5 has-text-low',
            iconClass: 'las la-bug mr-1',
          },
        ],
      },
      {
        values: [
          {
            field: '#',
            type: 'check',
            class: 'has-text-centered',
          },
          {
            field: 'id',
            value: '15',
          },
          {
            field: 'title',
            value: 'Nombre de tarea',
            class: 'is-ellipsis',
            type: 'btn',
            btnClass:
              'has-background-transparent has-text-left is-clickable is-borderless has-button-hover',
            btnTarget: 'detalle_tarea',
          },
          {
            field: 'project',
            value: 'Prueba DataCenter',
          },
          {
            field: 'service',
            value: 'Éthical Hacking',
          },
          {
            field: 'assing',
            value: 'Pedro Soto',
          },
          {
            field: 'start_date',
            value: '07/11/2022',
          },
          {
            field: 'host',
            value: '20.102.04',
          },
          {
            field: 'status',
            value: 'Detectada',
            class: 'has-background-status-det',
          },
          {
            field: 'priority',
            value: 'Crítico',
            class: 'has-text-centered',
            type: 'tooltip',
            tipClass:
              'has-tooltip-active has-tooltip-top is-relative is-size-5 has-text-danger',
            iconClass: 'las la-bug mr-1',
          },
        ],
      },
    ],
  };
}

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
})
export class Assignment2Component {
  users = {
    class:
      'table is-fullwidth p-4 is-radius is-size-6 mb-4 is-relative has-left-border is-clipped has-border-left-gradient has-shadow',
    columns: [
      {
        field: '#',
        label: 'check-all',
        type: 'check',
        class: 'has-text-centered',
      },
      {
        field: 'name',
        label: 'Nombre',
      },
      {
        field: 'profile',
        label: 'Perfil',
      },
      {
        field: 'status',
        label: 'Estado',
      },
    ],
    values: [
      {
        values: [
          {
            field: '#',
            type: 'check',
            class: 'has-text-centered',
          },
          {
            field: 'name',
            value: 'Constanza Flores Carvajal',
            type: 'img',
            figClass: 'image is-32x32 is-inline-flex mr-3 ',
            imgClass: 'is-rounded',
            imgSrc: 'assets/images/usuario1.jpg',
          },
          {
            field: 'profile',
            value: 'Encargado clientes',
          },
          {
            field: 'status',
            value: 'Activo',
          },          
        ],
      },
      {
        values: [
          {
            field: '#',
            type: 'check',
            class: 'has-text-centered',
          },
          {
            field: 'name',
            value: 'Pedro Gustavo Pinares Bon',
            type: 'img',
            figClass: 'image is-32x32 is-inline-flex mr-3 ',
            imgClass: 'is-rounded',
            imgSrc: 'assets/images/usuario2.jpg',
          },
          {
            field: 'profile',
            value: 'Administrador Cliente',
          },
          {
            field: 'status',
            value: 'Activo',
          },          
        ],
      },
      {
        values: [
          {
            field: '#',
            type: 'check',
            class: 'has-text-centered',
          },
          {
            field: 'name',
            value: 'Pía Agustina Rivera Fernandez',
            type: 'img',
            figClass: 'image is-32x32 is-inline-flex mr-3 ',
            imgClass: 'is-rounded',
            imgSrc: 'assets/images/usuario3.jpg',
          },
          {
            field: 'profile',
            value: 'Visualizador',
          },
          {
            field: 'status',
            value: 'Activo',
          },          
        ],
      },
    ],
  };
}

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
})
export class Assignment3Component {

}

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
})
export class Assignment4Component {

}
