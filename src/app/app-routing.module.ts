import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'e-sports-app',
    pathMatch: 'full'
  },

  {
    path: 'e-sports-app',
    loadChildren: () => import('./paginas/e-sports-app/e-sports-app.module').then( m => m.ESportsAppPageModule)
  },
  {
    path: 'tipos',
    loadChildren: () => import('./paginas/tipos/tipos.module').then( m => m.TiposPageModule)
  },
  {
    path: 'apostas',
    loadChildren: () => import('./paginas/apostas/apostas.module').then( m => m.ApostasPageModule)
  },
  {
    path: 'equipes',
    loadChildren: () => import('./paginas/equipes/equipes.module').then( m => m.EquipesPageModule)
  },
  {
    path: 'campeonatos',
    loadChildren: () => import('./paginas/campeonatos/campeonatos.module').then( m => m.CampeonatosPageModule)
  },
  {
    path: 'moba',
    loadChildren: () => import('./paginas/moba/moba.module').then( m => m.MobaPageModule)
  },
  {
    path: 'esportes',
    loadChildren: () => import('./paginas/esportes/esportes.module').then( m => m.EsportesPageModule)
  },
  {
    path: 'fps',
    loadChildren: () => import('./paginas/fps/fps.module').then( m => m.FpsPageModule)
  },
  {
    path: 'luta',
    loadChildren: () => import('./paginas/luta/luta.module').then( m => m.LutaPageModule)
  },
  {
    path: 'nacional',
    loadChildren: () => import('./paginas/nacional/nacional.module').then( m => m.NacionalPageModule)
  },
  {
    path: 'internacional',
    loadChildren: () => import('./paginas/internacional/internacional.module').then( m => m.InternacionalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
