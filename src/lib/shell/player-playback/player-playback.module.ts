import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPlaybackComponent } from './player-playback.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule } from '@angular/forms';
import {DurationPipeModule} from "../../util/duration-pipe.module";
@NgModule({
  imports: [CommonModule, NzSliderModule, FormsModule, DurationPipeModule],
  declarations: [PlayerPlaybackComponent],
  exports: [PlayerPlaybackComponent]
})
export class PlayerPlaybackModule {}
