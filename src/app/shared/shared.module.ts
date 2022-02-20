import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.modules';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SpinnerComponent]
})
export class SharedModule { }
