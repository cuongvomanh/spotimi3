import { ChangeDetectionStrategy, Component } from '@angular/core';
import {PlaybackStore} from "../../other/playback.store";
@Component({
  selector: 'as-now-playing-bar',
  templateUrl: './now-playing-bar.component.html',
  styleUrls: ['./now-playing-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NowPlayingBarComponent {
  currentTrack$ = this.playbackStore.currentTrack$;

  constructor(private playbackStore: PlaybackStore) {
  }
}
