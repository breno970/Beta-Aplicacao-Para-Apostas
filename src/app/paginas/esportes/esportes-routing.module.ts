import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsportesPage } from './esportes.page';

const routes: Routes = [
  {
    path: '',
    component: EsportesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsportesPageRoutingModule {}
