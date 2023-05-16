import { Component, Input, OnInit } from '@angular/core';
import { Column } from './column';

export type TableOptions = {
  columns: Column[];
  values: any[];
  class?: String;
};

@Component({
  selector: 'app-html-table',
  templateUrl: './html-table.component.html',
  styleUrls: ['./html-table.component.css'],
})
export class HtmlTableComponent implements OnInit {
  public tableOptions: Partial<TableOptions> | any;
  @Input() columns: any;
  @Input() values: any;
  @Input() class: String | undefined;

  ngOnInit(): void {
    if (this.values) {
      this.values = this.values.map((value: any)=> {
        value.values = value.values.map((column: any) => {
          if (!column.type) {
            column.type = 'default'
          }
          return column
        })
        return value
      })
    }

    this.tableOptions = {
      class: this.class || 'card px-3 is-fullwidth table is-size-6 is-relative has-left-border has-border-left-gradient has-shadow',
      columns: this.columns,
      values: this.values,
    }
  }
}
