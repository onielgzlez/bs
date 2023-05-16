import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { TeamComponent } from './team/team.component';
import { BugComponent } from './bug/bug.component';
import { CategoryComponent } from './category/category.component';
import { ServerComponent } from './server/server.component';
import { ProjectComponent } from './project/project.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: DashComponent },
  { path: 'equipo', component: TeamComponent },
  { path: 'vulnerabilidades', component: BugComponent },
  { path: 'categorias', component: CategoryComponent },
  { path: 'servidores', component: ServerComponent },
  { path: 'proyectos', component: ProjectComponent },
  { path: 'asignaciones', component: AssignmentComponent },
  { path: 'facturacion', component: PaymentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
