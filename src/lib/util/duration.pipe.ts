import { Pipe, PipeTransform } from '@angular/core';
import {TimeUtil} from "./time-util";
@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(durationInMs: number | null): string {
    if (!durationInMs) {
      return '';
    }
    return TimeUtil.formatDuration(durationInMs);
  }
}
