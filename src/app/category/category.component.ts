import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
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
        field: 'name',
        label: 'Nombre',
        class: 'has-text-left',
      },
      {
        field: 'created_at',
        label: 'Creación',
        class: 'has-text-left',
      },
    ];
    this.values = [
      {
        class: 'is-bordered-bottom py-3 px-3',
        values: [
          {
            field: 'id',
            value: 1,
          },
          {
            field: 'name',
            value: 'Firewall',
            class: 'py-4',
          },
          {
            field: 'created_at',
            value: '03/11/2022',
          },
        ],
      },
      {
        class: 'is-bordered-bottom py-3 px-3',
        values: [
          {
            field: 'id',
            value: 2,
          },
          {
            field: 'name',
            value: 'Nuevo',
            class: 'py-4',
          },
          {
            field: 'created_at',
            value: '02/11/2022',
          },
        ],
      },
    ];
    this.class =
      'card px-3 is-fullwidth table is-size-6 is-relative has-left-border has-border-left-gradient has-shadow';
  }
}
