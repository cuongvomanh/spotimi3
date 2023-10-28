import { ChangeDetectionStrategy, Component } from '@angular/core';
import {UIStore} from "../../shared/store/ui-store";

@Component({
  selector: 'as-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  readonly navItems$ = this.uiStore.navItems$;

  constructor(private readonly uiStore: UIStore) {
  }
}
