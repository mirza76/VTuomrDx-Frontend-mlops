import {InjectionToken} from '@angular/core';
import { AppConfig } from './appconfig.interface';
import { environments } from 'src/environments/environments';

export const API_SERVICE = new InjectionToken<AppConfig>('app.config');

export const API_CONFIG: AppConfig = {
    apiPath: environments.apiPath,
};
