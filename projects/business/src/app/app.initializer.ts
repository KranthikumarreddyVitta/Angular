import { Injector } from '@angular/core';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';

export function initializeApp(env: any, injector: Injector) {
  return () =>
    new Promise((resolve, reject) => {
      let envService = injector.get(EnvironmentService);
      envService.setEnvironment(env);
      resolve(true);
    });
}
