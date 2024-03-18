import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',

})
export class FirstService {

  constructor(http:HttpClient) { }

  sayHello(){
    return ' firsts service';
  }
}
