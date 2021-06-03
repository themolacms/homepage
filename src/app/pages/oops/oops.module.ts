import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OopsRoutingModule } from './oops-routing.module';
import { OopsComponent } from './oops.component';


@NgModule({
  declarations: [
    OopsComponent
  ],
  imports: [
    CommonModule,
    OopsRoutingModule
  ]
})
export class OopsModule { }
