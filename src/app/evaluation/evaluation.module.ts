import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluationPageRoutingModule } from './evaluation-routing.module';
import { SharedModule } from '../shared/shared.module';

import { EvaluationPage } from './evaluation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EvaluationPageRoutingModule,
    SharedModule
  ],
  declarations: [EvaluationPage]
})
export class EvaluationPageModule {}
