import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectComponent implements OnInit {
  @Input() columns: any;
  @Input() values: any;
  @Input() class: String | undefined;

  ngOnInit(): void {
    this.columns = [
      {
        field: 'id',
        label: 'ID',
        class: 'has-text-left pl-6',
      },
      {
        field: 'name',
        label: 'Nombre',
        class: 'has-text-left',
      },
      {
        field: 'type',
        label: 'Tipo',
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
        label: 'Acciones',
      },
    ];
    this.values = [
      {
        class: 'is-bordered-bottom py-3 px-3',
        values: [
          {
            field: 'id',
            value: 5,
            class: 'has-text-left pl-6',
          },
          {
            field: 'name',
            value: 'CopcopCo',
            class: 'py-4',
            type: 'link',
            link: '/proyecto',
            linkClass: 'has-no-decoration has-button-hover-sm',
          },
          {
            field: 'type',
            value: 'Consultoría',
          },
          {
            field: 'service',
            value: 'Sistemas Wireless',
          },
          {
            field: 'status',
            value: 'Abierto',
            class: 'has-background-primary-light',
          },
          {
            field: 'created_at',
            value: '03/09/2022',
          },
          {
            field: 'actions',
            value: [
              {
                value: 'Gráficos',
                link: '/proyecto',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-chart-pie mr-1 is-size-6',
              },
              {
                value: 'Tablero',
                link: '/tablero',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-columns mr-1 is-size-6',
              },
              {
                value: 'Listado',
                link: '/listado',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-list mr-1 is-size-6',
              },
            ],
            type: 'links',
            class: 'is-max-td',
          },
        ],
      },
      {
        class: 'has-background-cyan-dark',
        values: [
          {
            field: 'id',
            value: 10,
            class: 'has-text-left pl-6',
          },
          {
            field: 'name',
            value: 'CopcopCo RV. Patch 2334-s12',
            type: 'link',
            link: '/proyecto',
            linkClass: 'has-no-decoration has-button-hover-sm',
            span: true,
            spanClass: 'las la-level-up-alt is-size-7 is-rotate-45',
          },
          {
            field: 'type',
            value: 'Consultoría',
          },
          {
            field: 'service',
            value: 'Sistemas Wireless',
          },
          {
            field: 'status',
            value: 'Abierto',
            class: 'has-background-primary-light',
          },
          {
            field: 'created_at',
            value: '12/10/2022',
          },
          {
            field: 'actions',
            value: [
              {
                value: 'Gráficos',
                link: '/proyecto',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-chart-pie mr-1 is-size-6',
              },
              {
                value: 'Tablero',
                link: '/tablero',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-columns mr-1 is-size-6',
              },
              {
                value: 'Listado',
                link: '/listado',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-list mr-1 is-size-6',
              },
            ],
            type: 'links',
            class: 'is-max-td',
          },
        ],
      },
      {
        class: 'has-background-cyan-dark',
        values: [
          {
            field: 'id',
            value: 14,
            class: 'has-text-left pl-6',
          },
          {
            field: 'name',
            value: 'CopcopCo RV. Patch 2344-s23',
            type: 'link',
            link: '/proyecto',
            linkClass: 'has-no-decoration has-button-hover-sm',
            span: true,
            spanClass: 'las la-level-up-alt is-size-7 is-rotate-45',
          },
          {
            field: 'type',
            value: 'Consultoría',
          },
          {
            field: 'service',
            value: 'Sistemas Wireless',
          },
          {
            field: 'status',
            value: 'Abierto',
            class: 'has-background-primary-light',
          },
          {
            field: 'created_at',
            value: '09/11/2022',
          },
          {
            field: 'actions',
            value: [
              {
                value: 'Gráficos',
                link: '/proyecto',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-chart-pie mr-1 is-size-6',
              },
              {
                value: 'Tablero',
                link: '/tablero',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-columns mr-1 is-size-6',
              },
              {
                value: 'Listado',
                link: '/listado',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-list mr-1 is-size-6',
              },
            ],
            type: 'links',
            class: 'is-max-td',
          },
        ],
      },
      {
        class: 'is-bordered-bottom py-3 px-3',
        values: [
          {
            field: 'id',
            value: 6,
            class: 'has-text-left pl-6',
          },
          {
            field: 'name',
            value: 'Copco',
            class: 'py-4',
            type: 'link',
            link: '/proyecto',
            linkClass: 'has-no-decoration has-button-hover-sm',
          },
          {
            field: 'type',
            value: 'Consultoría',
          },
          {
            field: 'service',
            value: 'CISO as a service',
          },
          {
            field: 'status',
            value: 'Cerrado',
            class: 'has-background-danger-light',
          },
          {
            field: 'created_at',
            value: '02/11/2022',
          },
          {
            field: 'actions',
            value: [
              {
                value: 'Gráficos',
                link: '/proyecto',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-chart-pie mr-1 is-size-6',
              },
              {
                value: 'Tablero',
                link: '/tablero',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-columns mr-1 is-size-6',
              },
              {
                value: 'Listado',
                link: '/listado',
                linkClass:
                  'has-no-decoration is-size-7 has-background-transparent is-borderless has-button-hover-sm mr-2 button',
                iconClass: 'las la-list mr-1 is-size-6',
              },
            ],
            type: 'links',
            class: 'is-max-td',
          },
        ],
      },
    ];
    this.class =
      'card is-size-6 px-3 is-fullwidth table  is-relative has-left-border has-border-left-gradient has-shadow';
  }
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectDetailComponent {
  options = {
    series: [
      {
        name: 'Score',
        data: [75, 30, 83, 45, 55, 25, 60, 20],
      },
    ],
    chart: {
      height: 250,
      type: 'radar',
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
        formatter: () => {
          return '';
        },
      },
    },
    xaxis: {
      categories: [
        'Vector',
        'Complejidad',
        'Privilegios',
        'Interacción',
        'Scope',
        'Confindencialidad',
        'Integridad',
        'Disponibilidad',
      ],
    },
    labels: [
      'Vector',
      'Complejidad',
      'Privilegios',
      'Interacción',
      'Scope',
      'Confindencialidad',
      'Integridad',
      'Disponibilidad',
    ],
  };
  class = 'table is-fullwidth card is-size-6'
  /**
   *
                <tr>
                    <td class="is-ellipsis"><a href="" target="_blank" class="link"> <i
                                class="las la-file-pdf mr-2"></i>Haking Ético </a></td>
                    <td>14/03/2022</td>
                    <td>Software</td>
                </tr>
                <tr>
                    <td class="is-ellipsis"><a href="" target="_blank" class="link"> <i
                                class="las la-file-pdf mr-2"></i>Informe </a></td>
                    <td>15/01/2022</td>
                    <td>Wireless</td>
                </tr>
                <tr>
                    <td class="is-ellipsis"><a href="" target="_blank" class="link"> <i
                                class="las la-file-pdf mr-2"></i>Informe redes </a></td>
                    <td>15/01/2022</td>
                    <td>Redes</td>
                </tr>
            </table>
   */
  columns = [
    {
      field: 'name',
      label: 'Nombre',
    },
    {
      field: 'created_at',
      label: 'Fecha de creación',
    },
    {
      field: 'type',
      label: 'Tipo',
    },
  ]
  values = [
    {
      values: [
        {
          field: 'name',
          value: 'Haking Ético',
          class: 'is-ellipsis',
          type: 'link',
          link: 'proyecto',
          linkClass: 'link',
          target: '_blank',
          iconClass: 'las la-file-pdf mr-2',
        },
        {
          field: 'created_at',
          value: '14/03/2022',
        },
        {
          field: 'type',
          value: 'Software',
        },
      ],
    },
    {
      values: [
        {
          field: 'name',
          value: 'Informe',
          class: 'is-ellipsis',
          type: 'link',
          link: 'proyecto',
          linkClass: 'link',
          target: '_blank',
          iconClass: 'las la-file-pdf mr-2',
        },
        {
          field: 'created_at',
          value: '15/01/2022',
        },
        {
          field: 'type',
          value: 'Wireless',
        },
      ],
    },
    {
      values: [
        {
          field: 'name',
          value: 'Informe redes',
          class: 'is-ellipsis',
          type: 'link',
          link: 'proyecto',
          linkClass: 'link',
          target: '_blank',
          iconClass: 'las la-file-pdf mr-2',
        },
        {
          field: 'created_at',
          value: '15/01/2022',
        },
        {
          field: 'type',
          value: 'Redes',
        },
      ],
    },
  ]
}
