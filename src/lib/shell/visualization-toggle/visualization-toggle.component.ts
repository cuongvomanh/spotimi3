import { ChangeDetectionStrategy, Component } from '@angular/core';
import {PlaybackStore} from "../../other/playback.store";
import {VisualizerStore} from "../../visualizer/visualizer.store";

@Component({
  selector: 'as-visualization-toggle',
  templateUrl: './visualization-toggle.component.html',
  styleUrls: ['./visualization-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualizationToggleComponent {
  isVisualizationOn$ = this.visualizerStore.isVisible$;
  isPlaying$ = this.playbackStore.isPlaying$;

  constructor(private visualizerStore: VisualizerStore, private playbackStore: PlaybackStore) {}

  toggle(isVisible: boolean) {
    this.visualizerStore.setVisibility({ isVisible });
  }
}
