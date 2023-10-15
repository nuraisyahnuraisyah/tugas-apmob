import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TugasApmobPageRoutingModule } from './tugas-apmob-routing.module';

import { TugasApmobPage } from './tugas-apmob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TugasApmobPageRoutingModule
  ],
  declarations: [TugasApmobPage]
})
export class TugasApmobPageModule {}
