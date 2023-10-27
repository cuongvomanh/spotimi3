import { createFeatureSelector, createSelector } from '@ngrx/store';
import { playlistTrackFeatureKey, PlaylistTracksState } from './playlist-tracks.reducer';
import {SelectorUtil} from "../util/selector-util";

export const getPlaylistTracksState = createFeatureSelector<PlaylistTracksState>(
  playlistTrackFeatureKey
);

export const getPlaylistTracksLoading = createSelector(
  getPlaylistTracksState,
  SelectorUtil.isLoading
);

export const getPlaylistTracksById = (playlistId: string) =>
  createSelector(getPlaylistTracksState, ({ data }) => {
    return data?.get(playlistId);
  });
