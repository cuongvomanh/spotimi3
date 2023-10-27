import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import * as Sentry from '@sentry/angular';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { webShellRoutes } from './web-shell.routes';

/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {PlaylistsEffect, playlistsFeatureKey, playlistsReducer} from "../lib/playlist/playlists";
import {playlistTrackFeatureKey, PlaylistTracksEffect, playlistTracksReducer} from "../lib/playlist-tracks";
// import { extModules } from './build-specifics';
registerLocaleData(en);

const rootReducers = {
  [playlistsFeatureKey]: playlistsReducer,
  [playlistTrackFeatureKey]: playlistTracksReducer
};

@NgModule({
  imports: [
    CommonModule,
    // WebLayoutModule,
    // IconModule,
    NoopAnimationsModule,
    RouterModule.forRoot(webShellRoutes, {
      scrollPositionRestoration: 'top'
    }),
    StoreModule.forRoot(rootReducers),
    // EffectsModule.forRoot([ApplicationEffects, PlaylistsEffect, PlaylistTracksEffect]),
    EffectsModule.forRoot([ PlaylistsEffect, PlaylistTracksEffect]),
    // SettingsModule,
    // ...extModules
  ],
  exports: [RouterModule],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true
      })
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (store: Store) => () => {
    //     store.dispatch(AppInit());
    //   },
    //   multi: true,
    //   deps: [Store],
    // }
  ],
  declarations: []
})
export class WebShellModule {}
