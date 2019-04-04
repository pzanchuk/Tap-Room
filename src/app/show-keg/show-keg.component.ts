import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-show-keg',
  templateUrl: './show-keg.component.html',
  styleUrls: ['./show-keg.component.css']
})
export class ShowKegComponent{

  @Input() childKegList: Keg[];
  @Output() clickEdit = new EventEmitter;

  editButtonClicked(childSelectedKeg: Keg) {
    this.clickEdit.emit(childSelectedKeg);
  }

  sellOnePint(selectedKeg){
    selectedKeg.pint --;
    if(selectedKeg.pint < 0){
      selectedKeg.pint = 0;
    }
  }

  priceColor(selectedKeg){
      if(selectedKeg.price >= 5){
        return "redPrice";
      }else{
        return "greenPrice";
      }
  }

  alcoholColor(selectedKeg){
    if(selectedKeg.alcoholContent >= 6){
      return "strong-beer";
    }
  }
}
