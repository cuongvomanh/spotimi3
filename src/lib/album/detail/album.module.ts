import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { RouterModule } from '@angular/router';
// import {TracksLoadingComponent} from "../../ui/tracks-loading/tracks-loading.component";
import {MediaSummaryModule} from "../../ui/media-summary/media-summary.module";
import {PlayButtonModule} from "../../ui/play-button/play-button.module";
import {MediaTableModule} from "../../ui/media-table/media-table.module";
import {AlbumTrackModule} from "../../ui/album-track/album-track.module";
import {SvgIconsModule} from "@ngneat/svg-icon";
@NgModule({
  imports: [
    CommonModule,
    MediaSummaryModule,
    PlayButtonModule,
    MediaTableModule,
    SvgIconsModule,
    AlbumTrackModule,
    // TracksLoadingComponent,
    RouterModule.forChild([
      {
        path: '',
        component: AlbumComponent
      }
    ])
  ],
  declarations: [AlbumComponent]
})
export class AlbumModule {}
