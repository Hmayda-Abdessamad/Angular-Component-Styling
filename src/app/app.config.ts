import {ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {SecondServiceInjectionToken, SecondServiceProviderFactory} from "./services/SecondService";
import {ThirdService, thirdServiceProviderFactory} from "./services/ThirdService";
import {FourthService} from "./services/FourthService";
import {FifthService} from "./services/FifthService";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    FifthService,

    //inject second service

    {
      provide:SecondServiceInjectionToken,
      useFactory:SecondServiceProviderFactory,
      deps:[HttpClient]
    },
    // inject third service
    {
      provide:ThirdService,
      useFactory:thirdServiceProviderFactory,
      deps:[HttpClient]
    },

    //insert the fourth service , works only with class not with interfaces


    {
      provide:FourthService,
      useClass:FourthService,
    }
  ]
};
