import { Injectable } from '@angular/core';
import { EnvironmentService } from 'projects/core/src/lib/services/environment.service';
import { HttpService, UserService } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoodboardService {
  constructor(
    private http: HttpService,
    private env: EnvironmentService,
    private userService: UserService
  ) {}

  getStateList<T>(): Observable<T> {
    let url = this.env.getEndPoint() + 'load/states';
    return this.http.sendGETRequest(url);
  }
  getMoodBoardType<T>(): Observable<T> {
    let url = this.env.getEndPoint() + 'getMoodBoardType';
    return this.http.sendGETRequest(url);
  }
  getcompanyByUserMoodboard<T>(): Observable<T> {
    let url =
      this.env.getEndPoint() +
      'getcompanyByUserMoodboard?user_id=' +
      this.userService.getUser().getId();
    return this.http.sendGETRequest(url);
  }

  getItems<T>(param: any): Observable<T> {
    let url = this.env.getEndPoint() + 'product/filter2';
    return this.http.sendGETRequest(url, { params: param });
  }
  getCityList<T>(): Observable<T> {
    let url = this.env.getEndPoint() + 'warehouse';
    return this.http.sendGETRequest(url);
  }
  getCategoryList<T>(): Observable<T> {
    let url = this.env.getEndPoint() + 'getCategory';
    return this.http.sendGETRequest(url);
  }
  getProjectList<T>(): Observable<T> {
    let url =
      this.env.getEndPoint() + 'getMoodBoardProjectFilter?project_name=';
    return this.http.sendGETRequest(url);
  }
  getMoodBoard<T>(id: any): Observable<T> {
    let url =
      this.env.getEndPoint() + 'load/moodboard/items?moodboard_id=' + id;
    return this.http.sendGETRequest(url);
  }
  deleteItemToMoodboard<T>(param?: any): Observable<T> {
    let url = this.env.getEndPoint() + 'remove/moodboard/items';
    return this.http.sendPOSTRequest(url, JSON.stringify(param));
  }

  updateMDItem(md: any) {
    let obj = {
      sgid: md.sgid,
      moodboard_id: md.moodboard_id,
      qty: md.is_qty,
      months: md.months,
      total: md.is_total,
      price: md.price,
      sale_price: md.sale_price,
      asset_value: md.asset_value,
      button_type: md.button_type,
      buy_price: md.buy_price,
    };
    return this.http.sendPOSTRequest(
      this.env.getEndPoint() + 'update/moodboard/singleitem',
      JSON.stringify(obj)
    );
  }

  getMBSummary<T>(id: number): Observable<T> {
    return this.http
      .sendGETRequest(
        this.env.getEndPoint() + 'load/moodboard/items?moodboard_id=' + id
      )
      .pipe(
        map((data: any) => {
          return data.moodboard_items.map((item: any) => {
            item['is_total'] = parseFloat(item.total);
            item['is_qty'] = parseFloat(item.qty);
            return item;
          });
        })
      );
  }
  removeMyMB<T>(param: any): Observable<T> {
    let url = this.env.getEndPoint() + 'disable/moodboard';
    return this.http.sendPOSTRequest(url, JSON.stringify(param));
  }
  getMoodBoardList<T>(param: any): Observable<T> {
    let url = this.env.getEndPoint() + 'getMoodBoard';
    param['user_id'] = this.userService.getUser().getId();
    return this.http.sendGETRequest(url, { params: param });
  }
  getMyMoodBoardList<T>(param?: any): Observable<T> {
    let url = this.env.getEndPoint() + 'getMoodBoardByUser';
    if (!param) {
      param = {};
    }
    param['userid'] = this.userService.getUser().getId();
    return this.http.sendPOSTRequest(url, JSON.stringify(param));
  }
  getProductDetails<T>(pid: any, wid: any): Observable<T> {
    let url = this.env.getEndPoint() + 'product';
    let param = { product_id: '' + pid, warehouse_id: '' + wid };
    return this.http.sendPOSTRequest(url, JSON.stringify(param));
  }
  getDisabledMBList<T>(param: any): Observable<T> {
    let url = this.env.getEndPoint() + 'disable_moodboards';
    param['user_id'] = this.userService.getUser().getId();
    return this.http.sendGETRequest(url, { params: param });
  }
  updateMoodboard(param: any): Observable<any> {
    let url = this.env.getEndPoint() + 'updateMoodBoard';
    return this.http.sendPOSTRequest<any>(url, param);
  }
  createMoodboard(param: any): Observable<any> {
    let url = this.env.getEndPoint() + 'createMoodBoard';
    return this.http.sendPOSTRequest<any>(url, param);
  }
  getMBQuote(param: any): Observable<any> {
    let url =
      this.env.getEndPoint() +
      'load/customer/quotes?user_id=98&source_type=my&type=null';
    return this.http.sendGETRequest(url);
  }
  requestRendering(param: any): Observable<any> {
    let url = this.env.getEndPoint() + 'sendEmailMoodboard';
    return this.http.sendPOSTRequest<any>(url, param);
  }
  addMBItem(param: any) {
    return this.http.sendPOSTRequest(
      this.env.getEndPoint() + 'add/moodboard/items',
      param
    );
  }

  shareMoodboard(email: string) {
    return this.http.sendPOSTRequest(
      this.env.getEndPoint() + 'emailMoodBoardLink',
      JSON.stringify({
        email: email,
        url: location.href,
        user_id: this.userService.getUser().getId(),
      })
    );
  }

  addMoodboardToCart(obj: any): Observable<any> {
    return this.http.sendPOSTRequest(
      this.env.getEndPoint() + 'add/moodboard/cart',
      obj,
    ).pipe(map((data: any) => data))
  }
}
