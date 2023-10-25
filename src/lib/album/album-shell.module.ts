import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {RouterUtil} from "../util/router-util";
import {AlbumsEffect} from "./store/albums.effect";
import {albumsFeatureKey, albumsReducer} from "./store/albums.reducer";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: `:${RouterUtil.Configuration.AlbumId}`,
        loadChildren: async () =>
          (await import('./detail')).AlbumModule
      }
    ]),
    StoreModule.forFeature(albumsFeatureKey, albumsReducer),
    EffectsModule.forFeature([AlbumsEffect])
  ]
})
export class AlbumShellModule {}
