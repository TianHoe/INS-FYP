import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TopnavComponent } from '../topnav/topnav.component';
import { TopnavBackbtnComponent } from '../topnav-backbtn/topnav-backbtn.component';


@NgModule({
  declarations: [
    TopnavComponent,
    TopnavBackbtnComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TopnavComponent,
    TopnavBackbtnComponent,
    IonicModule
  ]
})
export class SharedModule { }
