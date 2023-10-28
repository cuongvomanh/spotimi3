import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {SETTINGS_FEATURE_KEY, settingsReducer} from "./settings.reducer";
import {SettingsEffects} from "./settings.effects";
import {SettingsFacade} from "./settings.facade";

@NgModule({
  imports: [
    StoreModule.forFeature(SETTINGS_FEATURE_KEY, settingsReducer),
    EffectsModule.forFeature([SettingsEffects])
  ],
  providers: [SettingsFacade]
})
export class SettingsModule {}
