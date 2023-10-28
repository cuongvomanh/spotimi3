import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowPlayingBarComponent } from './now-playing-bar.component';
import {PlayerControlsModule} from "../player-controls/player-controls.module";
import {PlayerPlaybackModule} from "../player-playback/player-playback.module";
import {TrackCurrentInfoModule} from "../track-current-info/track-current-info.module";
import {PlayerVolumeModule} from "../player-volume/player-volume.module";
import {VisualizationToggleModule} from "../visualization-toggle/visualization-toggle.module";
@NgModule({
  imports: [
    CommonModule,
    PlayerControlsModule,
    PlayerPlaybackModule,
    TrackCurrentInfoModule,
    PlayerVolumeModule,
    VisualizationToggleModule
  ],
  declarations: [NowPlayingBarComponent],
  exports: [NowPlayingBarComponent]
})
export class NowPlayingBarModule {}
