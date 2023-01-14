import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MybioComponent } from './components/mybio/mybio.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Div1Component } from './components/div1/div1.component';
import { Page3Component } from './components/page3/page3.component';
import { MapComponent } from './components/map/map.component';
import {HttpClientModule} from "@angular/common/http";
import { ColourchangeDirective } from './shared/Directives/colourchange.directive'
@NgModule({
  declarations: [
    AppComponent,
    MybioComponent,
    Page1Component,
    Page2Component,
    Div1Component,
    Page3Component,
    MapComponent,
    ColourchangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [Page3Component]
})
export class AppModule { }
