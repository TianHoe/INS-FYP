import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { MapsPageRoutingModule } from './maps-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MapsPage } from './maps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    MapsPageRoutingModule,
    SharedModule
  ],
  declarations: [MapsPage]
})
export class MapsPageModule {}
