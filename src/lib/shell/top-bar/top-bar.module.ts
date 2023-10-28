import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
// import { SocialShareModule } from '@angular-spotify/web/shell/ui/social-share';
import {UserDropdownModule} from "../user-dropdown/user-dropdown.module";
import {DataSizeObserverDirective} from "../../shared/directives/data-size-observer.directive";
@NgModule({
  // imports: [CommonModule, UserDropdownModule, SocialShareModule, DataSizeObserverDirective],
  imports: [CommonModule, UserDropdownModule, DataSizeObserverDirective],
  declarations: [TopBarComponent],
  exports: [TopBarComponent]
})
export class TopBarModule {}
