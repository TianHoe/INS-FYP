import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoothDetailsPage } from './booth-details.page';

const routes: Routes = [
  {
    path: '',
    component: BoothDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoothDetailsPageRoutingModule {}
