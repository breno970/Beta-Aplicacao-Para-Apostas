import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FpsPageRoutingModule } from './fps-routing.module';

import { FpsPage } from './fps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FpsPageRoutingModule
  ],
  declarations: [FpsPage]
})
export class FpsPageModule {}
