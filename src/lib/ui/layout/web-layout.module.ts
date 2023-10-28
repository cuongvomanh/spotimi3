import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import {NavBarModule} from "../../shell/nav-bar/nav-bar.module";
import {TopBarModule} from "../../shell/top-bar/top-bar.module";
import {DataSizeObserverDirective} from "../../shared/directives/data-size-observer.directive";
import {MainViewModule} from "../../shell/main/main-view.module";
import {NowPlayingBarModule} from "../../shell/now-playing-bar/now-playing-bar.module";
import {AlbumArtOverlayModule} from "../../shell/album-art-overlay/album-art-overlay.module";
import {WebVisualizerUiModule} from "../../visualizer/web-visualizer-ui.module";
import {UnauthorizedModalModule} from "../../auth/unauthorized-modal/unauthorized-modal.module";

@NgModule({
  imports: [
    CommonModule,
    StoreModule,
    RouterModule,
    NavBarModule,
    TopBarModule,
    MainViewModule,
    NowPlayingBarModule,
    UnauthorizedModalModule,
    AlbumArtOverlayModule,
    WebVisualizerUiModule,
    DataSizeObserverDirective
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class WebLayoutModule {}
