import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './models/keg.model';

@Pipe({
  name: "pintcounter",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Keg[], pintCount){
    let output: Keg[] = [];
    if(pintCount === "10Kegs"){
      for(let i=0; i<input.length; i++){
        if(input[i].pint <= 10){
          output.push(input[i]);
        }
      }
      return output;
    }else{
      return input;
    }
  }
}
