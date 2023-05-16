import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts'

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { TeamComponent } from './team/team.component';
import { BugComponent } from './bug/bug.component';
import { VulnerabilityComponent } from './vulnerability/vulnerability.component';
import { ProjectComponent } from './project/project.component';
import { CategoryComponent } from './category/category.component';
import { ServerComponent } from './server/server.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { HtmlTableComponent } from './html-table/html-table.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    UserComponent,
    ProfileComponent,
    TeamComponent,
    BugComponent,
    VulnerabilityComponent,
    ProjectComponent,
    CategoryComponent,
    ServerComponent,
    AssignmentComponent,
    HtmlTableComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    CustomChartComponent,
    HeaderComponent,
    FooterComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
