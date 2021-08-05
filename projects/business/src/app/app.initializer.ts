import { Injector } from '@angular/core';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { UserService } from 'projects/core/src/lib/services/user.service';
import { error } from 'protractor';

export function initializeApp(env: any, injector: Injector) {
  return () =>
    new Promise((resolve, reject) => {
      let envService = injector.get(EnvironmentService);
      envService.setEnvironment(env);
      let userService = injector.get(UserService);
      userService.loadUser().subscribe(data=>{
        resolve(true);
      },error=>{
        reject(false);
      })
    });
}
