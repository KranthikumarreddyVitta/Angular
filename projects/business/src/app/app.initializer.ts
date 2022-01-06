import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthenticationService,
  EnvironmentService,
} from 'projects/core/src/public-api';

export function initializeApp(env: any, injector: Injector) {
  return () =>
    new Promise((resolve, reject) => {
      let envService = injector.get(EnvironmentService);
      envService.setEnvironment(env);
      let auth = injector.get(AuthenticationService);
      if (!auth.checkUser()) {
        let router = injector.get(Router);
        router.navigate(['home']);
      } else {
        let router = injector.get(Router);
        router.navigate(['home']);
      }
      resolve(true);
    });
}
