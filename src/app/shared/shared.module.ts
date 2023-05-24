import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaUrlPipe } from './pipes/media-url.pipe';
import { UserPipe } from './pipes/user.pipe';



@NgModule({
  declarations: [
    MediaUrlPipe,
    UserPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MediaUrlPipe,
    UserPipe,
  ]
})
export class SharedModule { }
