import { ChangeDetectionStrategy, Component } from '@angular/core';
import { startWith } from 'rxjs/operators';
import {PlaybackStore} from "../../other/playback.store";
import {PlaybackService} from "../../shared/store/playback.service";
@Component({
  selector: 'as-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerControlsComponent {
  isPlaying$ = this.playbackStore.isPlaying$.pipe(startWith(false));

  constructor(private playbackStore: PlaybackStore, private playbackService: PlaybackService) {
  }

  async togglePlay() {
    this.playbackService.play();
  }

  async next() {
    this.playbackService.next();
  }

  async prev() {
    this.playbackService.prev();
  }
}
