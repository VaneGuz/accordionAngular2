import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppComponent } from './app.component';
import { EjecucionComponent } from './ejecucion/ejecucion.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  //  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: EjecucionComponent },
  //  { path: 'procesos',     component: HeroesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    FilterComponent,
    EjecucionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
