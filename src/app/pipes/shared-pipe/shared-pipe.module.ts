import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChunkPipe } from '../chunk.pipe';
import { ClassSuffixPipe } from '../class-suffix.pipe';
import { DateToWordsPipe } from '../date-to-words.pipe';
import { SafeUrlPipe } from '../safe-url.pipe';



@NgModule({
  declarations: [
    ChunkPipe,
    ClassSuffixPipe,
    DateToWordsPipe,
    SafeUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChunkPipe,
    ClassSuffixPipe,
    DateToWordsPipe,
    SafeUrlPipe
  ]
})
export class SharedPipeModule { }
