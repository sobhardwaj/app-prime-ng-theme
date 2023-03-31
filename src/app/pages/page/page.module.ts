import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page/page.component';

import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { LeftMenuComponent } from '../layout/left-menu/left-menu.component';
import { APP_PRIMENG_COMPONENTS, APP_PRIMENG_MODULE } from '../../shared/shared.module';
import { UserTableComponent } from './page/user-table/user-table.component';
@NgModule({
  declarations: [
    LayoutComponent,
    LeftMenuComponent,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PageRoutingModule,
    APP_PRIMENG_MODULE
  ],
  exports: [
    LayoutComponent,
    LeftMenuComponent,
    HeaderComponent,
    FooterComponent,
    PageComponent
  ]
})
export class PageModule { }
