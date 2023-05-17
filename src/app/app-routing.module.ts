import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DashComponent,
  DashEmptyComponent,
  DashNotRiskComponent,
} from './dash/dash.component';
import { TeamComponent } from './team/team.component';
import { BugComponent } from './bug/bug.component';
import { CategoryComponent } from './category/category.component';
import { ServerComponent } from './server/server.component';
import {
  ProjectComponent,
  ProjectDetailComponent,
} from './project/project.component';
import { 
  BoardComponent,
  ListComponent,
} from './project/board.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { PaymentComponent } from './payment/payment.component';
import {
  LoginComponent,
  LoginDemoComponent,
  LoginResumeComponent,
} from './login/login.component';
import { LoginBoardComponent } from './login/login-board.component';
import { PasswordComponent } from './login/password.component';
import { PasswordSentComponent } from './login/password.component';
import { PasswordNewComponent } from './login/password.component';
import { PasswordSuccessComponent } from './login/password.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: DashComponent },
  { path: 'inicio-empty', component: DashEmptyComponent },
  { path: 'inicio-sin-criticos', component: DashNotRiskComponent },
  { path: 'equipo', component: TeamComponent },
  { path: 'vulnerabilidades', component: BugComponent },
  { path: 'categorias', component: CategoryComponent },
  { path: 'servidores', component: ServerComponent },
  { path: 'proyectos', component: ProjectComponent },
  { path: 'proyecto', component: ProjectDetailComponent },
  { path: 'tablero', component: BoardComponent },
  { path: 'listado', component: ListComponent },
  { path: 'asignaciones', component: AssignmentComponent },
  { path: 'facturacion', component: PaymentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-onboarding', component: LoginBoardComponent },
  { path: 'login-demo', component: LoginDemoComponent },
  { path: 'login-demo-resumen', component: LoginResumeComponent },
  { path: 'password-recuperar', component: PasswordComponent },
  { path: 'password-enviado', component: PasswordSentComponent },
  { path: 'password-nuevo', component: PasswordNewComponent },
  { path: 'password-exito', component: PasswordSuccessComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
