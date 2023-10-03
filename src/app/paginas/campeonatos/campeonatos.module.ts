import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampeonatosPageRoutingModule } from './campeonatos-routing.module';

import { CampeonatosPage } from './campeonatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampeonatosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CampeonatosPage]
})
export class CampeonatosPageModule {}
