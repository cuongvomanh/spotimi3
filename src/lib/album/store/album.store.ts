/// <reference types="spotify-api" />
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, pluck, switchMap, tap } from 'rxjs/operators';
import {GenericState} from "../../shared/generic-state";
import {AlbumApiService} from "../../shared/api/album-api";
import {RouterUtil} from "../../util/router-util";
import {SelectorUtil} from "../../util/selector-util";
import {PlaybackStore} from "../../other/playback.store";
import {PlayerApiService} from "../../shared/api/player-api";

interface AlbumState extends GenericState<SpotifyApi.AlbumObjectFull> {
  albumId: string;
}

@Injectable()
export class AlbumStore extends ComponentStore<AlbumState> {
  albumIdParams$: Observable<string> = this.route.params.pipe(
    pluck(RouterUtil.Configuration.AlbumId),
    filter((albumId: string) => !!albumId)
  );

  isCurrentAlbumLoading$ = this.select(SelectorUtil.isLoading);

  album$ = this.albumIdParams$.pipe(
    tap((albumId) => {
      this.patchState({
        albumId
      });
      this.loadAlbum({ albumId });
    }),
    switchMap(() => this.select((s) => s.data))
  );

  isAlbumPlaying$ = SelectorUtil.getMediaPlayingState(
    combineLatest([this.album$.pipe(map((album) => album?.uri)), this.playbackStore.playback$])
  );

  loadAlbum = this.effect<{ albumId: string }>((params$) =>
    params$.pipe(
      tap(() => {
        this.patchState({
          status: 'loading',
          error: null
        });
      }),
      switchMap(({ albumId }) =>
        this.albumApi.getAlbum(albumId).pipe(
          tapResponse(
            (album) => {
              this.patchState({
                data: album,
                status: 'success',
                error: ''
              });
            },
            (error) => {
              this.patchState({
                status: 'error',
                error: error as unknown as string
              });
            }
          )
        )
      )
    )
  );

  readonly toggleAlbum = this.effect<{ isPlaying: boolean; uri: string }>((params$) =>
    params$.pipe(
      switchMap(({ isPlaying, uri }) =>
        this.playerApi.togglePlay(isPlaying, {
          context_uri: uri
        })
      )
    )
  );

  constructor(
    private route: ActivatedRoute,
    private playbackStore: PlaybackStore,
    private albumApi: AlbumApiService,
    private playerApi: PlayerApiService
  ) {
    super(<AlbumState>{});
  }
}
