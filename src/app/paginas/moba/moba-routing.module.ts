import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobaPage } from './moba.page';

const routes: Routes = [
  {
    path: '',
    component: MobaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobaPageRoutingModule {}
