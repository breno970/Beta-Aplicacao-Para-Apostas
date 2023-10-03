import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ESportsAppPage } from './e-sports-app.page';

const routes: Routes = [
  {
    path: '',
    component: ESportsAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ESportsAppPageRoutingModule {}
