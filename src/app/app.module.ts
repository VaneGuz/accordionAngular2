import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppComponent } from './app.component';
import {AccordionComponent} from './accordion/accordion.component';
import {FilterComponent} from './filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
