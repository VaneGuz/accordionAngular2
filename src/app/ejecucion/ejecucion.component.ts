import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ProcesoService } from '../proceso.service';
import { Proceso } from '../data/Proceso';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-ejecucion',
  templateUrl: './ejecucion.component.html',
  styleUrls: ['./ejecucion.component.css']
})
export class EjecucionComponent implements OnInit {

  constructor(
    private procesoService: ProcesoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  proceso: Proceso;

  ngOnInit() {
    this.route.paramMap
   .switchMap((params: ParamMap) => this.procesoService.getProceso(+params.get('id')))
   .subscribe(proceso => this.proceso = proceso);
  }
  goBack(): void {
  this.location.back();
}

}
