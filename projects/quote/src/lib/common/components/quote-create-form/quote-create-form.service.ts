import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { HttpService, UserService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { QuoteFormType } from './quote-create-form.component';

@Injectable({
  providedIn: 'root',
})
export class QuoteCreateFormService {
  constructor(
    private _http: HttpService,
    private _env: EnvironmentService,
    private _user: UserService
  ) {}

  private getParams(form: FormGroup) {
    let obj = form.value;
    obj.user_id = this._user.getUser().getId();
    obj.userid = this._user.getUser().getId();
    return obj;
  }

  createQuote(obj: FormGroup, type: QuoteFormType): Observable<any> {
    obj = this.getParams(obj);

    let url = 'save/quote';
    // if (type === 'EDIT') {
    //   url = 'save/quote';
    // }
    if (type === 'COPY') {
      url = 'clone/quote';
    }
    return this._http.sendPOSTRequest(
      this._env.getEndPoint() + url,
      JSON.stringify(obj)
    );
  }
}
