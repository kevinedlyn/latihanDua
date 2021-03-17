import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  randisTrue :Boolean = null;
  randomAngka : number;
  userNum : number;
  showRandomisTrue : Boolean;
  constructor() {
    this.randomAngka = Math.floor(Math.random() * (100 - 1) + 1);
  }

  cekRandom()
  {
    if(this.randomAngka == this.userNum)
    {
      this.randisTrue = true;
      this.randomAngka = Math.floor(Math.random() * (100 - 1) + 1);
    }
    else{
      this.randisTrue = false;
    }
  }

  showRandom()
  {
    this.showRandomisTrue = true;
  }

  unshowRandom()
  {
    this.showRandomisTrue = false;
  }
}
