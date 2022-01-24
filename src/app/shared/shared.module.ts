import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedMaterialModule } from './shared-material.module';
import { sharedLibModule } from './shared-lib.module';

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    sharedLibModule,
    sharedMaterialModule
  ],
  exports: [
    sharedLibModule,
    sharedMaterialModule
  ],
  providers: [],
})
export class SharedModule {}