import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-show-keg',
  templateUrl: './show-keg.component.html',
  styleUrls: ['./show-keg.component.css']
})
export class ShowKegComponent{

  @Input() kegList: Keg[];


}
