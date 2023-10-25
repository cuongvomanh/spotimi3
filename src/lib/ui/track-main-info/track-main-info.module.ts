import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TrackMainInfoComponent } from './track-main-info.component';
import {MediaCoverModule} from "../media-cover/media-cover.module";
@NgModule({
  imports: [CommonModule, RouterModule, MediaCoverModule],
  declarations: [TrackMainInfoComponent],
  exports: [TrackMainInfoComponent]
})
export class TrackMainInfoModule {}
