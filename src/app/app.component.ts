import { Component } from '@angular/core';

import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterKegList: Keg[] = [
    new Keg('Amber', 'Alaskan', 1.5, 3.2)
  ];

  masterSelectedKeg: Keg = null; //childSelectedKeg
  masterAddKegClicked: boolean = false;

  masterAddKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
  }

  editingClicked(childSelectedKeg){
    this.masterSelectedKeg = childSelectedKeg;
  }

  finishedEditing(){
    this.masterSelectedKeg = null;
  }

  addKegClicked(){
    this.masterAddKegClicked = true;
  }
}
