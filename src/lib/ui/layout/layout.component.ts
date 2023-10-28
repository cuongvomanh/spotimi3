import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import {PlaybackStore} from "../../other/playback.store";
import {VisualizerStore} from "../../visualizer/visualizer.store";
import {loadPlaylists} from "../../playlist/playlists";

@Component({
  selector: 'as-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  showPiPVisualizer$ = this.visualizerStore.showPiPVisualizer$;
  currentAlbumCoverUrl$ = this.playbackStore.currentTrack$.pipe(
    map((track) => track?.album?.images[0]?.url),
    filter((imageUrl) => !!imageUrl)
  );

  constructor(
    private playbackStore: PlaybackStore,
    private store: Store,
    private visualizerStore: VisualizerStore
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadPlaylists());
  }
}
