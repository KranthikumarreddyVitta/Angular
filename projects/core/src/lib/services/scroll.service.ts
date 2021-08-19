import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  onScroll: BehaviorSubject<any> = new BehaviorSubject(null);
  scrollCallback = (evt: any) => {
    if (
      evt.target.offsetHeight + evt.target.scrollTop >
      evt.target.scrollHeight
    ) {
      this.onScroll.next(evt);
    }
  };
  constructor() {}
}
