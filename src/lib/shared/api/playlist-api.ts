import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {APP_CONFIG} from "../app-config.token";
import {AppConfig} from "../app.config";
import {SpotifyApiParams} from "./spotify-api-params";

@Injectable({ providedIn: 'root' })
export class PlaylistApiService {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

  getUserSavedPlaylists(
    params: SpotifyApiParams = {
      limit: 50
    }
  ) {
    return this.http.get<SpotifyApi.ListOfCurrentUsersPlaylistsResponse>(
      `${this.appConfig.baseURL}/me/playlists`,
      {
        params
      }
    );
  }

  getById(playlistId: string) {
    if (!playlistId) {
      throw new Error('Playlist Id is required');
    }
    return this.http.get<SpotifyApi.PlaylistObjectFull>(
      `${this.appConfig.baseURL}/playlists/${playlistId}`
    );
  }

  getTracks(playlistId: string) {
    if (!playlistId) {
      throw new Error('Playlist Id is required');
    }
    return this.http.get<SpotifyApi.PlaylistTrackResponse>(
      `${this.appConfig.baseURL}/playlists/${playlistId}/tracks`
    );
  }
}
