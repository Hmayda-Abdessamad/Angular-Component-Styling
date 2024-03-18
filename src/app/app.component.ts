import {Component, Inject} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

import {SecondService, SecondServiceInjectionToken} from "./services/SecondService";
import {ThirdService} from "./services/ThirdService";
import {FourthService} from "./services/FourthService";
import {FirstService} from "./services/first.service";
import {FifthService} from "./services/FifthService";




@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    NgClass,
    NgStyle,

  ],
  templateUrl: './app.component.html'
})

export class AppComponent  {

  firstMessage:string=this.firstService.sayHello()
  secondMessage:string=this.secondService.sayHello()
  thirdMessage:string=this.thirdService.sayHello()
  fourthMessage:string=this.fourthService.sayHello()
  fifthMessage=this.fifthService.sayhello()
  constructor(private firstService:FirstService,@Inject(SecondServiceInjectionToken)private secondService:SecondService,@Inject(ThirdService)private thirdService:ThirdService,private fourthService:FourthService,private fifthService:FifthService) {
  }



  }
