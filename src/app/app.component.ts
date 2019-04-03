import { Component } from '@angular/core';

import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  kegs: Keg[] = [];

  addKeg(newKeg: Keg){
    this.kegs.push(newKeg);
  }
}
