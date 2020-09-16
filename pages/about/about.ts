import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css'],
})
export class AboutPage {
  initValue: number;
  initValue1: number;
  initValue2: number;
  depValue1: number;
  depValue2: number;
  depValue3: number;
  depValue4: number;
  constructor(public navCtrl: NavController) {

  }

compute() {
  this.depValue1 = (this.initValue * (1 - (this.initValue1/100)));
  this.depValue2 = (this.depValue1 * this.initValue2/100);
  this.depValue3 = (this.depValue1 + this.depValue2);
  this.depValue4 = ((this.initValue - this.depValue3) + this.initValue * this.initValue2/100);
  

}


}
