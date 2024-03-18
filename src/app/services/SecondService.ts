import {HttpClient} from "@angular/common/http";
import {InjectionToken} from "@angular/core";


export function SecondServiceProviderFactory(http:HttpClient) {
  return new SecondService(http)
}

export const SecondServiceInjectionToken= new InjectionToken("SecondService")
export class SecondService {

  constructor(http:HttpClient) {
  }
  sayHello() {
    return "second service"
  }
}
