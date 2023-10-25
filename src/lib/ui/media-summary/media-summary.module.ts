import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaSummaryComponent } from './media-summary.component';
import {MediaCoverModule} from "../media-cover/media-cover.module";

@NgModule({
  imports: [CommonModule, MediaCoverModule],
  declarations: [MediaSummaryComponent],
  exports: [MediaSummaryComponent]
})
export class MediaSummaryModule {}
