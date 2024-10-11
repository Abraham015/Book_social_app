import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AppRoutingModule } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {httpTokenInterceptor} from "./sevices/interceptor/http-token.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      AppRoutingModule,
      provideClientHydration(),
      provideHttpClient(
          withFetch(),
          withInterceptors([httpTokenInterceptor])
      )
  ]
};
