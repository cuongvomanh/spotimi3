import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {APP_CONFIG} from "../app-config.token";
import {AppConfig} from "../app.config";
import {SpotifyApiAudioAnalysisResponse} from "./audio-analysis-response";
import {SpotifyApiParams} from "./spotify-api-params";

@Injectable({ providedIn: 'root' })
export class TrackApiService {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

  getAudioAnalysis(trackId: string) {
    return this.http.get<SpotifyApiAudioAnalysisResponse>(
      `${this.appConfig.baseURL}/audio-analysis/${trackId}`
    );
  }

  getAudioFeatures(trackId: string) {
    return this.http.get<SpotifyApi.AudioAnalysisResponse>(
      `${this.appConfig.baseURL}/audio-features/${trackId}`
    );
  }

  getUserSavedTracks(
    params: SpotifyApiParams = {
      limit: 50
    }
  ) {
    return this.http.get<SpotifyApi.UsersSavedTracksResponse>(
      `${this.appConfig.baseURL}/me/tracks`,
      {
        params
      }
    );
  }
}
