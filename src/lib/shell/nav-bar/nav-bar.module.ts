import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { SvgIconsModule } from '@ngneat/svg-icon';
import {NavLinksModule} from "../nav-links/nav-links.module";
@NgModule({
  imports: [CommonModule, NavLinksModule, RouterModule, SvgIconsModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent]
})
export class NavBarModule {}
