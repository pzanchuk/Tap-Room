import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { ShowKegComponent } from './show-keg/show-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    NewKegComponent,
    ShowKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
