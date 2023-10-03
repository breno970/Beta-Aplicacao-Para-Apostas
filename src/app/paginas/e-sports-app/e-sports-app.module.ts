import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ESportsAppPageRoutingModule } from './e-sports-app-routing.module';

import { ESportsAppPage } from './e-sports-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ESportsAppPageRoutingModule
  ],
  declarations: [ESportsAppPage]
})
export class ESportsAppPageModule {}
