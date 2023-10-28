import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackCurrentInfoComponent } from './track-current-info.component';
import { RouterModule } from '@angular/router';
import {MediaCoverModule} from "../../ui/media-cover/media-cover.module";

@NgModule({
  imports: [CommonModule, RouterModule, MediaCoverModule],
  declarations: [TrackCurrentInfoComponent],
  exports: [TrackCurrentInfoComponent]
})
export class TrackCurrentInfoModule {}
