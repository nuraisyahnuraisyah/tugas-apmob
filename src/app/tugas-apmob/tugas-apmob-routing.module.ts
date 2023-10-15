import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TugasApmobPage } from './tugas-apmob.page';

const routes: Routes = [
  {
    path: '',
    component: TugasApmobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TugasApmobPageRoutingModule {}
