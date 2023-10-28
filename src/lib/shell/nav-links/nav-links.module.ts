import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@ngrx/component';
import { NavLinksComponent } from './nav-links.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import {PlayButtonModule} from "../../ui/play-button/play-button.module";
import {MediaCoverModule} from "../../ui/media-cover/media-cover.module";
import {SpinnerModule} from "../../ui/spinner/spinner.module";
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PlayButtonModule,
    LetModule,
    PushModule,
    SpinnerModule,
    MediaCoverModule
  ],
  declarations: [NavLinksComponent, NavLinkComponent],
  exports: [NavLinksComponent]
})
export class NavLinksModule {}
