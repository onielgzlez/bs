import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
  @Input() vulnerabilidades: any;
  @Input() topFiveVulnerabilidades: any;
  @Input() topFiveProjects: any;
  @Input() assignments: any;
  @Input() assignmentExpires: any;
  @Input() options: any;

  ngOnInit(): void {
    this.vulnerabilidades = {
      class:
        'table is-size-6 is-fullwidth is-radius is-relative has-left-border has-border-left-gradient has-shadow is-scroll-mobile height-box',
      columns: [
        {
          field: 'ip',
          label: 'IP/Host',
          class: 'has-text-centered',
        },
        {
          field: 'type',
          label: 'Tipo Vulnerabilidad',
          class: 'has-text-centered',
        },
      ],
      values: [
        {
          values: [
            {
              field: 'ip',
              value: '10.50.14.7',
              class: 'has-text-centered',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
          ],
        },
        {
          values: [
            {
              field: 'ip',
              value: '10.50.14.14',
              class: 'has-text-centered',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
          ],
        },
        {
          values: [
            {
              field: 'ip',
              value: '10.50.14.20',
              class: 'has-text-centered',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
          ],
        },
        {
          values: [
            {
              field: 'ip',
              value: '10.50.17.86',
              class: 'has-text-centered',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
          ],
        },
        {
          values: [
            {
              field: 'ip',
              value: '10.50.18.10',
              class: 'has-text-centered',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
          ],
        },
      ],
    };

    this.topFiveVulnerabilidades = {
      class:
        'table is-size-6 is-fullwidth is-radius is-relative has-left-border has-border-left-danger has-shadow is-scroll-mobile is-block-mobile',
      columns: [
        {
          field: 'critical',
          label: 'Criticidad',
          class: 'has-text-centered',
        },
        {
          field: 'title',
          label: 'Título',
        },
        {
          field: 'area',
          label: 'Área',
        },
        {
          field: 'responsible',
          label: 'Responsable',
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
              field: 'critical',
              value: 'Crítico',
              class: 'has-text-centered',
              type: 'icon',
              iconClass: 'las la-bug has-text-danger mr-2',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
            {
              field: 'area',
              value: '',
            },
            {
              field: 'responsible',
              value: 'Pedro Soto',
            },
            {
              field: 'status',
              value: 'Detectada',
              class: 'has-background-status-det',
            },
          ],
        },
        {
          values: [
            {
              field: 'critical',
              value: 'Crítico',
              class: 'has-text-centered',
              type: 'icon',
              iconClass: 'las la-bug has-text-danger mr-2',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
            {
              field: 'area',
              value: '',
            },
            {
              field: 'responsible',
              value: 'Constanza Flores',
            },
            {
              field: 'status',
              value: 'Asignada',
              class: 'has-background-status-start',
            },
          ],
        },
        {
          values: [
            {
              field: 'critical',
              value: 'Crítico',
              class: 'has-text-centered',
              type: 'icon',
              iconClass: 'las la-bug has-text-danger mr-2',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
            {
              field: 'area',
              value: '',
            },
            {
              field: 'responsible',
              value: 'Constanza Flores',
            },
            {
              field: 'status',
              value: 'Detectada',
              class: 'has-background-status-det',
            },
          ],
        },
        {
          values: [
            {
              field: 'critical',
              value: 'Crítico',
              class: 'has-text-centered',
              type: 'icon',
              iconClass: 'las la-bug has-text-danger mr-2',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
            {
              field: 'area',
              value: '',
            },
            {
              field: 'responsible',
              value: 'Pedro Soto',
            },
            {
              field: 'status',
              value: 'En desarrollo',
              class: 'has-background-status-dev',
            },
          ],
        },
        {
          values: [
            {
              field: 'critical',
              value: 'Crítico',
              class: 'has-text-centered',
              type: 'icon',
              iconClass: 'las la-bug has-text-danger mr-2',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
            {
              field: 'area',
              value: '',
            },
            {
              field: 'responsible',
              value: 'Pedro Soto',
            },
            {
              field: 'status',
              value: 'Asignada',
              class: 'has-background-status-start',
            },
          ],
        },
      ],
    };

    this.topFiveProjects = {
      class:
        'table is-size-6 is-fullwidth is-radius is-relative has-left-border has-border-left-gradient has-shadow is-scroll-mobile height-box',
      columns: [
        {
          field: 'title',
          label: 'Título Proyecto',
        },
        {
          field: 'critical',
          label: 'Críticas',
          class: 'has-text-centered',
        },
        {
          field: 'high',
          label: 'Altas',
          class: 'has-text-centered',
        },
        {
          field: 'medium',
          label: 'Medias',
          class: 'has-text-centered',
        },
      ],
      values: [
        {
          values: [
            {
              field: 'title',
              value: 'Prueba Tomas',
              class: 'is-ellipsis',
            },
            {
              field: 'critical',
              value: 2,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 1,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 0,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'title',
              value: 'Proyecto de investigación',
              class: 'is-ellipsis',
            },
            {
              field: 'critical',
              value: 0,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 0,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 0,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'title',
              value: 'Evaluación infraestructura',
              class: 'is-ellipsis',
            },
            {
              field: 'critical',
              value: 0,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 0,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 0,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'title',
              value: 'No respeto la Alerta',
              class: 'is-ellipsis',
            },
            {
              field: 'critical',
              value: 6,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 51,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 1,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'title',
              value: 'Revisión AH',
              class: 'is-ellipsis',
            },
            {
              field: 'critical',
              value: 3,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 3,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 3,
              class: 'has-text-centered',
            },
          ],
        },
      ],
    };
    
    this.assignments = {
      class:
        'table is-size-6 is-fullwidth is-radius is-relative has-left-border has-border-left-gradient has-shadow is-scroll-mobile height-box',
      columns: [
        {
          field: 'assign',
          label: 'Asignado a',
        },
        {
          field: 'critical',
          label: 'Críticas',
          class: 'has-text-centered',
        },
        {
          field: 'high',
          label: 'Altas',
          class: 'has-text-centered',
        },
        {
          field: 'medium',
          label: 'Medias',
          class: 'has-text-centered',
        },
      ],
      values: [
        {
          values: [
            {
              field: 'assign',
              value: 'Constanza Flores',
              class: 'is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario1.jpg',
            },
            {
              field: 'critical',
              value: 5,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 0,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 4,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Pedro Pinares',
              class: 'is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario2.jpg',
            },
            {
              field: 'critical',
              value: 2,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 4,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 10,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Pía Rivera',
              class: 'is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario3.jpg',
            },
            {
              field: 'critical',
              value: 2,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 4,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 7,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Carlos Toro',
              class: 'is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/avatar.jpg',
            },
            {
              field: 'critical',
              value: 9,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 2,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 1,
              class: 'has-text-centered',
            },
          ],
        },
      ],
    };

    this.assignmentExpires = {
      class:
        'table is-size-6 is-fullwidth is-radius is-relative has-left-border has-border-left-gradient has-shadow is-scroll-mobile height-box',
      columns: [
        {
          field: 'assign',
          label: 'Asignado a',
        },
        {
          field: 'vulnerability',
          label: 'Vulnerabilidad',
          class: 'is-ellipsis',
        },
        {
          field: 'expired',
          label: 'Vencido',
          class: 'is-ellipsis',
        },
      ],
      values: [
        {
          values: [
            {
              field: 'assign',
              value: 'Constanza Flores',
              class: 'is-ellipsis is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario1.jpg',
            },
            {
              field: 'vulnerability',
              value: 'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              class: 'is-ellipsis',
            },
            {
              field: 'expire',
              value: '09/10/2023',
              class: 'is-ellipsis',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Pedro Pinares',
              class: 'is-ellipsis is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario2.jpg',
            },
            {
              field: 'vulnerability',
              value: 'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_23_32_3',
              class: 'is-ellipsis',
            },
            {
              field: 'expire',
              value: '11/10/2023',
              class: 'is-ellipsis',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Pía Rivera',
              class: 'is-ellipsis is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario3.jpg',
            },
            {
              field: 'vulnerability',
              value: 'Python Unsupported Version Detection',
              class: 'is-ellipsis',
            },
            {
              field: 'expire',
              value: '13/10/2023',
              class: 'is-ellipsis',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Carlos Toro',
              class: 'is-ellipsis is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/avatar.jpg',
            },
            {
              field: 'vulnerability',
              value: 'Apache 2.4x < 2.4.47 Multiple Vulnerabilities',
              class: 'is-ellipsis',
            },
            {
              field: 'expire',
              value: '15/10/2023',
              class: 'is-ellipsis',
            },
          ],
        },
      ],
    };

    this.options = {
      series: [3, 7, 3, 7, 30],
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
        offsetX: 50,
        offsetY: 50,
      },
      legend: {
        show: true,
        position: 'right',
      },
      colors: ['#fd996b', '#f7db4f', '#24bfa8', '#3f94bd', '#f67aaf'],
      labels: ['Muy Altos', 'Altos', 'Moderados', 'Bajos', 'Críticos'],

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };
  }
}

@Component({
  selector: 'app-dash-emtpy',
  templateUrl: './dash-empty.component.html',
})
export class DashEmptyComponent implements OnInit {
  constructor(private myService: AppService) {}

  ngOnInit(): void {
    this.myService.loginPageRendered.next(true)
  }
}

@Component({
  selector: 'app-dash-risk',
  templateUrl: './dash-not-risk.component.html',
})
export class DashNotRiskComponent implements OnInit {
  @Input() vulnerabilidades: any;
  @Input() topFiveVulnerabilidades: any;
  @Input() topFiveProjects: any;
  @Input() assignments: any;
  @Input() assignmentExpires: any;

  ngOnInit(): void {
    this.vulnerabilidades = {
      class:
        'table is-size-6 is-fullwidth is-radius is-relative has-left-border has-border-left-gradient has-shadow is-scroll-mobile is-block-mobile',
      columns: [
        {
          field: 'ip',
          label: 'IP/Host',
          class: 'has-text-centered',
        },
        {
          field: 'type',
          label: 'Tipo Vulnerabilidad',
          class: 'has-text-centered',
        },
      ],
      values: [
        {
          values: [
            {
              field: 'ip',
              value: '10.50.14.7',
              class: 'has-text-centered',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
          ],
        },
        {
          values: [
            {
              field: 'ip',
              value: '10.50.14.14',
              class: 'has-text-centered',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
          ],
        },
        {
          values: [
            {
              field: 'ip',
              value: '10.50.14.20',
              class: 'has-text-centered',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
          ],
        },
        {
          values: [
            {
              field: 'ip',
              value: '10.50.17.86',
              class: 'has-text-centered',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
          ],
        },
        {
          values: [
            {
              field: 'ip',
              value: '10.50.18.10',
              class: 'has-text-centered',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
          ],
        },
      ],
    };

    this.topFiveVulnerabilidades = {
      class:
        'table is-size-6 is-fullwidth is-radius is-relative has-left-border has-border-left-danger has-shadow is-scroll-mobile is-block-mobile',
      columns: [
        {
          field: 'critical',
          label: 'Criticidad',
          class: 'has-text-centered',
          type: 'icon',
          iconClass: 'las la-bug has-text-danger mr-2',
        },
        {
          field: 'title',
          label: 'Título',
        },
        {
          field: 'area',
          label: 'Área',
        },
        {
          field: 'responsible',
          label: 'Responsable',
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
              field: 'critical',
              value: 'Crítico',
              class: 'has-text-centered',
              type: 'icon',
              iconClass: 'las la-bug has-text-danger mr-2',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
            {
              field: 'area',
              value: '',
            },
            {
              field: 'responsible',
              value: 'Pedro Soto',
            },
            {
              field: 'status',
              value: 'Detectada',
              class: 'has-background-status-det',
            },
          ],
        },
        {
          values: [
            {
              field: 'critical',
              value: 'Crítico',
              class: 'has-text-centered',
              type: 'icon',
              iconClass: 'las la-bug has-text-danger mr-2',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
            {
              field: 'area',
              value: '',
            },
            {
              field: 'responsible',
              value: 'Constanza Flores',
            },
            {
              field: 'status',
              value: 'Asignada',
              class: 'has-background-status-start',
            },
          ],
        },
        {
          values: [
            {
              field: 'critical',
              value: 'Crítico',
              class: 'has-text-centered',
              type: 'icon',
              iconClass: 'las la-bug has-text-danger mr-2',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
            {
              field: 'area',
              value: '',
            },
            {
              field: 'responsible',
              value: 'Constanza Flores',
            },
            {
              field: 'status',
              value: 'Detectada',
              class: 'has-background-status-det',
            },
          ],
        },
        {
          values: [
            {
              field: 'critical',
              value: 'Crítico',
              class: 'has-text-centered',
              type: 'icon',
              iconClass: 'las la-bug has-text-danger mr-2',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
            {
              field: 'area',
              value: '',
            },
            {
              field: 'responsible',
              value: 'Pedro Soto',
            },
            {
              field: 'status',
              value: 'En desarrollo',
              class: 'has-background-status-dev',
            },
          ],
        },
        {
          values: [
            {
              field: 'critical',
              value: 'Crítico',
              class: 'has-text-centered',
              type: 'icon',
              iconClass: 'las la-bug has-text-danger mr-2',
            },
            {
              field: 'type',
              value:
                'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              type: 'btn',
              btnClass:
                'has-text-left has-background-transparent is-borderless has-button-hover-sm js-modal-trigger',
              btnTarget: 'detalle_tarea',
            },
            {
              field: 'area',
              value: '',
            },
            {
              field: 'responsible',
              value: 'Pedro Soto',
            },
            {
              field: 'status',
              value: 'Asignada',
              class: 'has-background-status-start',
            },
          ],
        },
      ],
    };

    this.topFiveProjects = {
      class:
        'table is-size-6 is-fullwidth is-radius is-relative has-left-border has-border-left-gradient has-shadow is-scroll-mobile is-block-mobile',
      columns: [
        {
          field: 'title',
          label: 'Título Proyecto',
        },
        {
          field: 'critical',
          label: 'Críticas',
          class: 'has-text-centered',
        },
        {
          field: 'high',
          label: 'Altas',
          class: 'has-text-centered',
        },
        {
          field: 'medium',
          label: 'Medias',
          class: 'has-text-centered',
        },
      ],
      values: [
        {
          values: [
            {
              field: 'title',
              value: 'Prueba Tomas',
              class: 'is-ellipsis',
            },
            {
              field: 'critical',
              value: 2,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 1,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 0,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'title',
              value: 'Proyecto de investigación',
              class: 'is-ellipsis',
            },
            {
              field: 'critical',
              value: 0,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 0,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 0,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'title',
              value: 'Evaluación infraestructura',
              class: 'is-ellipsis',
            },
            {
              field: 'critical',
              value: 0,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 0,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 0,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'title',
              value: 'No respeto la Alerta',
              class: 'is-ellipsis',
            },
            {
              field: 'critical',
              value: 6,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 51,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 1,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'title',
              value: 'Revisión AH',
              class: 'is-ellipsis',
            },
            {
              field: 'critical',
              value: 3,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 3,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 3,
              class: 'has-text-centered',
            },
          ],
        },
      ],
    };
    
    this.assignments = {
      class:
        'table is-size-6 is-fullwidth is-radius is-relative has-left-border has-border-left-gradient has-shadow is-scroll-mobile is-block-mobile',
      columns: [
        {
          field: 'assign',
          label: 'Asignado a',
        },
        {
          field: 'critical',
          label: 'Críticas',
          class: 'has-text-centered',
        },
        {
          field: 'high',
          label: 'Altas',
          class: 'has-text-centered',
        },
        {
          field: 'medium',
          label: 'Medias',
          class: 'has-text-centered',
        },
      ],
      values: [
        {
          values: [
            {
              field: 'assign',
              value: 'Constanza Flores',
              class: 'is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario1.jpg',
            },
            {
              field: 'critical',
              value: 5,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 0,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 4,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Pedro Pinares',
              class: 'is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario2.jpg',
            },
            {
              field: 'critical',
              value: 2,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 4,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 10,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Pía Rivera',
              class: 'is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario3.jpg',
            },
            {
              field: 'critical',
              value: 2,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 4,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 7,
              class: 'has-text-centered',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Carlos Toro',
              class: 'is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/avatar.jpg',
            },
            {
              field: 'critical',
              value: 9,
              class: 'has-text-centered',
            },
            {
              field: 'high',
              value: 2,
              class: 'has-text-centered',
            },
            {
              field: 'medium',
              value: 1,
              class: 'has-text-centered',
            },
          ],
        },
      ],
    };

    this.assignmentExpires = {
      class:
        'table is-size-6 is-fullwidth is-radius is-relative has-left-border has-border-left-gradient has-shadow is-scroll-mobile is-block-mobile',
      columns: [
        {
          field: 'assign',
          label: 'Asignado a',
        },
        {
          field: 'vulnerability',
          label: 'Vulnerabilidad',
          class: 'is-ellipsis',
        },
        {
          field: 'expired',
          label: 'Vencido',
          class: 'is-ellipsis',
        },
      ],
      values: [
        {
          values: [
            {
              field: 'assign',
              value: 'Constanza Flores',
              class: 'is-ellipsis is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario1.jpg',
            },
            {
              field: 'vulnerability',
              value: 'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_36_23_0',
              class: 'is-ellipsis',
            },
            {
              field: 'expire',
              value: '09/10/2023',
              class: 'is-ellipsis',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Pedro Pinares',
              class: 'is-ellipsis is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario2.jpg',
            },
            {
              field: 'vulnerability',
              value: 'Oracle Solaris Critical Patch Update: oct2020_SRUII_3_23_32_3',
              class: 'is-ellipsis',
            },
            {
              field: 'expire',
              value: '11/10/2023',
              class: 'is-ellipsis',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Pía Rivera',
              class: 'is-ellipsis is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/usuario3.jpg',
            },
            {
              field: 'vulnerability',
              value: 'Python Unsupported Version Detection',
              class: 'is-ellipsis',
            },
            {
              field: 'expire',
              value: '13/10/2023',
              class: 'is-ellipsis',
            },
          ],
        },
        {
          values: [
            {
              field: 'assign',
              value: 'Carlos Toro',
              class: 'is-ellipsis is-flex is-items-align-center',
              type: 'img',
              figClass: 'image is-32x32 is-inline-flex mr-3',
              imgClass: 'is-rounded',
              imgSrc: 'assets/images/avatar.jpg',
            },
            {
              field: 'vulnerability',
              value: 'Apache 2.4x < 2.4.47 Multiple Vulnerabilities',
              class: 'is-ellipsis',
            },
            {
              field: 'expire',
              value: '15/10/2023',
              class: 'is-ellipsis',
            },
          ],
        },
      ],
    };
  }
}
