import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import {
  DashComponent,
  DashEmptyComponent,
  DashNotRiskComponent,
} from './dash/dash.component';
import { UserComponent } from './user/user.component';
import { TeamComponent } from './team/team.component';
import { BugComponent } from './bug/bug.component';
import {
  ProjectComponent,
  ProjectDetailComponent,
} from './project/project.component';
import {
  BoardComponent,
  BoardListComponent,
  ListComponent,
} from './project/board.component';
import { CategoryComponent } from './category/category.component';
import { ServerComponent } from './server/server.component';
import {
  AssignmentComponent,
  Assignment2Component,
  Assignment3Component,
  Assignment4Component,
} from './assignment/assignment.component';
import {
  HtmlTableComponent,
  HtmlLinksComponent,
  HtmlDefaultComponent,
  HtmlIconComponent,
  HtmlImgComponent,
  HtmlCheckComponent,
  HtmlFilterComponent,
} from './html-table/html-table.component';
import { MenuComponent } from './menu/menu.component';
import {
  LoginComponent,
  LoginDemoComponent,
  LoginResumeComponent,
} from './login/login.component';
import {
  PasswordComponent,
  PasswordNewComponent,
  PasswordSentComponent,
  PasswordSuccessComponent,
} from './login/password.component';
import { CustomChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginBoardComponent } from './login/login-board.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    DashEmptyComponent,
    DashNotRiskComponent,
    UserComponent,
    TeamComponent,
    BugComponent,
    ProjectComponent,
    ProjectDetailComponent,
    BoardComponent,
    BoardListComponent,
    ListComponent,
    CategoryComponent,
    ServerComponent,
    AssignmentComponent,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    HtmlTableComponent,
    HtmlLinksComponent,
    HtmlDefaultComponent,
    HtmlIconComponent,
    HtmlImgComponent,
    HtmlCheckComponent,
    HtmlFilterComponent,
    MenuComponent,
    LoginComponent,
    LoginBoardComponent,
    LoginDemoComponent,
    LoginResumeComponent,
    PasswordComponent,
    PasswordNewComponent,
    PasswordSentComponent,
    PasswordSuccessComponent,
    CustomChartComponent,
    HeaderComponent,
    FooterComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
