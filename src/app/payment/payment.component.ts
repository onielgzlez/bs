import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() columns: any;
  @Input() values: any;
  @Input() class: String | undefined;

  ngOnInit(): void {
    this.columns = [
      {
        field: 'fact',
        label: 'Facturación',
        class: 'has-text-left',
      },
      {
        field: 'date',
        label: 'Fecha',
        class: 'has-text-left',
      },
      {
        field: 'file',
        label: 'Descargar archivo',
        class: 'has-text-left',
      },
    ];
    this.values = [
      {
        class: 'is-bordered-bottom py-3 px-3',
        values: [
          {
            field: 'fact',
            value: 'Lorem ipsum dolor sit amet,',
          },
          {
            field: 'date',
            value: '10/11/2022',
          },
          {
            field: 'file',
            value: 'Facturación',
            type: 'link',
          },
        ],
      },
      {
        class: 'is-bordered-bottom py-3 px-3',
        values: [
          {
            field: 'fact',
            value: 'Cosectetur adiprum fugit',
          },
          {
            field: 'date',
            value: '12/12/2022',
          },
          {
            field: 'file',
            value: 'Facturación',
            type: 'link',
          },
        ],
      },
    ];
    this.class =
      'card is-size-6 px-3 is-fullwidth table  is-relative has-left-border has-border-left-gradient has-shadow';
  }
}