import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  items: MegaMenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        label: 'Application Monitoring',
        icon: 'pi pi-fw pi-box',
      },
      {
        label: 'Real User Monitoring',
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Logs Monitoring',
        icon: 'pi pi-fw pi-building',
      },
      {
        label: 'Infrastructure Monitoring',
        icon: 'pi pi-fw pi-server',
      },
      {
        label: 'API Analytics',
        icon: 'pi pi-fw pi-chart-bar',
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
      }
    ];
  }
}
