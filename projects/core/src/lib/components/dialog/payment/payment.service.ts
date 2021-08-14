import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../../../services/environment.service';
import { UserService } from '../../../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private _user: UserService, private _env: EnvironmentService) {}

  createOrder() {}
  makeCardPayment(): Observable<any> {
    return new Observable((observer) => {
      const handler = (window as any).Plaid.create({
        env: 'production',
        clientName: 'Inhabitr',
        key: '74ca8ca3dead06d399c082d47e9a1d',
        product: ['auth'],
        selectAccount: true,
        onLoad() {},
        onSuccess: (publicToken: string, metadata: any) => {
          let param = {
            payment_method: 'plaid',
            payment_token: publicToken,
            plaid_account_id: metadata.account_id,
          };
          observer.next(param);
        },
        onExit(err: any, metadata: any) {
          observer.error(err);
        },
        onEvent(eventName: any, metadata: any) {},
      });
      handler.open();
    });
  }

  makeBankPayment(): Observable<any> {
    return new Observable((observer) => {
      var stripe = (window as any).Stripe('pk_test_uYzRdKckia4c4F4UgZtM9J9T');
      console.log(stripe);
      const handler = (window as any).StripeCheckout.configure({
        key: this._env.getStripeKey(),
        locale: 'USD',
        panelLabel: 'Confirm',
        token: (response: any) => {
          let param = {
            payment_method: 'stripe',
            payment_token: response?.id,
          };
          observer.next(param);
        },
      });
      handler.open({
        name: 'Inhabitr',
        description: '',
        currency: 'USD',
        email: this._user.getUser().getEmail(),
        allowRememberMe: true,
      });
    });
  }
}
