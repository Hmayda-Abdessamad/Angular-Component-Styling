import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FifthService {
  constructor(http:HttpClient) {

  }

  sayhello(){
    return "fifth service "
  }
}
