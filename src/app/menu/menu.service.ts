import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuList: Menu[] = [
    {
      name: "Inicio",
      href: "/",
      icon: "is-block las la-chart-pie",
    },
    {
      name: "Proyectos",
      href: "proyectos",
      icon: "is-block las la-briefcase",
    },
    {
      name: "Host/IP",
      href: "servidores",
      icon: "is-block las la-server",   
    },
    {
      name: "Categorías",
      href: "categorias",
      icon: "is-block las la-tag",   
    },
    {
      name: "Asignaciones",
      href: "asignaciones",
      icon: "is-block las la-tasks",      
    },
    {
      name: "Vulnerabilidades",
      href: "vulnerabilidades",
      icon: "is-block las la-bug",      
    },
    {
      name: "Equipo",
      href: "equipo",
      icon: "is-block las la-user-friends",      
    },
  ]

  constructor() {
  }

  getMenuList() {
    return this.menuList
  }
}
