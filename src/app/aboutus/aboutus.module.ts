import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './aboutus.routing';
import { AboutusComponent } from './aboutus.component';
import { AppCommonModule } from '../app.common.module';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    AppCommonModule
  ],
  declarations: [AboutusComponent]
})
export class AboutUsModule { }