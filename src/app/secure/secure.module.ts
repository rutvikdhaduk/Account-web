import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SecureRoutingModule,
    SharedComponentsModule
  ]
})
export class SecureModule { }
