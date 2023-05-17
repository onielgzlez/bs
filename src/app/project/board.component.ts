import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-bord',
  templateUrl: './board.component.html',
})
export class BoardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const isPt4 = document.querySelector('.is-pt4') as HTMLElement;
    if (isPt4 && isPt4.classList.contains('pt-5')) {
      isPt4.classList.remove('pt-5');
      isPt4.classList.add('pt-4');
    }
  }
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements AfterViewInit {
  @Input() bugs: any;

  ngOnInit(): void {
    this.bugs = {
      class:
        'table is-fullwidth p-4 is-radius is-size-6  is-relative has-left-border has-border-left-gradient has-shadow',
      columns: [
        {
          field: 'id',
          label: 'ID',
          class: 'has-text-centered',
        },
        {
          field: 'title',
          label: 'Nombre tarea',
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
              field: 'id',
              value: '12',
            },
            {
              field: 'title',
              value:
                'Oracle Solaris critical patch update - oct2020_SCRUTI_3_33_26_0',
              type: 'btn',
              btnClass:
                'has-background-transparent has-text-left is-clickable is-borderless has-button-hover js-modal-trigger',
              btnTarget: 'detalle_tarea',
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
              value: 'Asignada',
              class: 'has-background-status-start',
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
              field: 'id',
              value: '13',
              class: 'has-text-centered',
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
              value: 'En desarrollo',
              class: 'has-background-status-dev',
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
              field: 'id',
              value: '14',
              class: 'has-text-centered',
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
              value: 'Asignada',
              class: 'has-background-status-start',
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
              field: 'id',
              value: '15',
              class: 'has-text-centered',
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
  ngAfterViewInit(): void {
    const isPt4 = document.querySelector('.is-pt4') as HTMLElement;
    if (isPt4 && isPt4.classList.contains('pt-5')) {
      isPt4.classList.remove('pt-5');
      isPt4.classList.add('pt-4');
    }
  }
}
