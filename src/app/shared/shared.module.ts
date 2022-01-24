import { NgModule } from '@angular/core';
import { sharedMaterialModule } from './shared-material.module';
import { sharedLibModule } from './shared-lib.module';

@NgModule({
  declarations: [],
  imports: [ 
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