import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  get(obj : any,key : string){
    // let keys =  key?.replaceAll('[','.')?.replaceAll(']','')?.split(".");
    // return keys.reduce((obj,next)=> obj[next],obj);
  }
}
