import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthenticationService,
  CoreService,
  EnvironmentService,
} from 'projects/core/src/public-api';

export function initializeApp(env: any, injector: Injector) {
  return () =>
    new Promise((resolve, reject) => {
      let envService = injector.get(EnvironmentService);
      envService.setEnvironment(env);
      let auth = injector.get(AuthenticationService);
      let core = injector.get(CoreService);
      if (!auth.checkUser()) {
        let router = injector.get(Router);
      }
      else core.getCartCount();
      resolve(true);
    });
}
