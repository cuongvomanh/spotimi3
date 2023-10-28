import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {APP_CONFIG} from "../app-config.token";
import {AppConfig} from "../app.config";
@Injectable({ providedIn: 'root' })
export class SpotifyApiService {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

  getMe(): Observable<SpotifyApi.CurrentUsersProfileResponse> {
    return this.http.get<SpotifyApi.CurrentUsersProfileResponse>(`${this.appConfig.baseURL}/me`);
  }
}
