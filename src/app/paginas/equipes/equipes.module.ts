import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipesPageRoutingModule } from './equipes-routing.module';

import { EquipesPage } from './equipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EquipesPage]
})
export class EquipesPageModule {}
