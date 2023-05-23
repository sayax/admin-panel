import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaUrlPipe } from './pipes/media-url.pipe';



@NgModule({
  declarations: [
    MediaUrlPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MediaUrlPipe,
  ]
})
export class SharedModule { }
