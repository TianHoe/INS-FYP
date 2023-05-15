import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoothDetailsPageRoutingModule } from './booth-details-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BoothDetailsPage } from './booth-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoothDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [BoothDetailsPage]
})
export class BoothDetailsPageModule {}
