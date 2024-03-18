import {HttpClient} from "@angular/common/http";


export function thirdServiceProviderFactory(http:HttpClient){
  return new ThirdService(http);
}
export class ThirdService {

  constructor(http:HttpClient) {
  }
  sayHello() {
    return "third service"
  }
}

