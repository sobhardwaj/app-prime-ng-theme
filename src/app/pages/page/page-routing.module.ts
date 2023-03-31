import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { UserTableComponent } from './page/user-table/user-table.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PageComponent
  },
  {
    path: 'users',
    component: UserTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
