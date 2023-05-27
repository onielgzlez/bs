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
      this.values = this.values.map((value: any) => {
        value.values = value.values.map((column: any) => {
          if (!column.type) {
            column.type = 'default';
          }
          return column;
        });
        return value;
      });
    }

    if (this.columns) {
      this.columns = this.columns.map((column: any) => {
        if (!column.type) {
          column.type = 'default';
        }
        return column;
      });
    }

    this.tableOptions = {
      class:
        this.class ||
        'card px-3 is-fullwidth table is-size-6 is-relative has-left-border has-border-left-gradient has-shadow',
      columns: this.columns,
      values: this.values,
    };
  }
}

@Component({
  selector: 'app-html-links',
  templateUrl: './links.component.html',
})
export class HtmlLinksComponent {
  @Input() values: any;
}

@Component({
  selector: 'app-html-default',
  templateUrl: './default.component.html',
})
export class HtmlDefaultComponent {
  @Input() value: any;
}

@Component({
  selector: 'app-html-toogle',
  templateUrl: './toogle.component.html',
})
export class HtmlToogleComponent {
  @Input() column: any;
}

@Component({
  selector: 'app-html-icon',
  templateUrl: './icon.component.html',
})
export class HtmlIconComponent {
  @Input() column: any;
}

@Component({
  selector: 'app-html-check',
  templateUrl: './check.component.html',
})
export class HtmlCheckComponent {
  @Input() column: any;
}

@Component({
  selector: 'app-html-img',
  templateUrl: './img.component.html',
})
export class HtmlImgComponent {
  @Input() column: any;
}

@Component({
  selector: 'app-html-filter',
  templateUrl: './filter.component.html',
})
export class HtmlFilterComponent {
  @Input() column: any;
}
