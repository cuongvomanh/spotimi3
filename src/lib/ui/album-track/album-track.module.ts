import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumTrackComponent } from './album-track.component';
import { LetModule, PushModule } from '@ngrx/component';
import {MediaTableModule} from "../media-table/media-table.module";
import {MediaOrderModule} from "../media-order/media-order.module";
import {TrackMainInfoModule} from "../track-main-info/track-main-info.module";
import {DurationPipeModule} from "../../util/duration-pipe.module";

@NgModule({
  imports: [
    CommonModule,
    MediaTableModule,
    MediaOrderModule,
    TrackMainInfoModule,
    DurationPipeModule,
    LetModule, PushModule,
  ],
  declarations: [AlbumTrackComponent],
  exports: [AlbumTrackComponent]
})
export class AlbumTrackModule {}
