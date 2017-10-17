import { Component, Input } from '@angular/core';
import { Proceso } from '../data/proceso';
import { Log } from '../data/log';
import { Consulta } from '../data/consulta';
import { ProcesoService } from '../proceso.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecEjecucion } from '../data/secEjecucion';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [ProcesoService]
})
export class AccordionComponent implements OnInit {
  @Input() consulta: Consulta;
  title = 'Accordion Component';
  procesos: Proceso[];
  selectedProceso: Proceso;
  secEjecucion: SecEjecucion;
  isFirstOpen: any = true;
  detalle = false;
  log = false;
  medida: any = 'col-md-12';
  registros: any[];
  p = 1;
  d = 1;
  ejecucion: SecEjecucion;
  logs: Log[];
  progressBar = {
    success: 70,
    warning: 30,
    danger: 10
  };
  constructor(private router: Router, private procesoService: ProcesoService) { }
  ngOnInit(): void {
    this.getProcesos();
    this.getLog();
  }

  calcularProgressBar(ejecuciones: SecEjecucion[]) {
    for (let i = 0; i < ejecuciones.length; i++) {
      console.log('Entro ejecuciones;' + i);
      this.ejecucion = ejecuciones[i];
      this.ejecucion.exitosos = (100 * this.ejecucion.numRegistrosExitosos) / this.ejecucion.numRegistrosAProcesar;
      this.ejecucion.error = (100 * this.ejecucion.numRegistrosConError) / this.ejecucion.numRegistrosAProcesar;
      this.ejecucion.pendientes = (100 * (this.ejecucion.numRegistrosAProcesar - (this.ejecucion.numRegistrosExitosos +
        this.ejecucion.numRegistrosConError))) / this.ejecucion.numRegistrosAProcesar;
      /*    console.log('Entro exitosos;' + this.ejecucion.exitosos);
          console.log('Entro error;' + this.ejecucion.error);
          console.log('Entro pendientes;' + this.ejecucion.pendientes);*/
    }
  }
  getProcesos(): void {
    this.procesoService.getProcesos().then(procesos => this.procesos = procesos);
    //this.procesoService.getProcesos(consulta).then(procesos => this.procesos = procesos);

  }

  getLog(): void {
    this.procesoService.getLog().then(logs => this.logs = logs);
    //this.procesoService.getProcesos(consulta).then(procesos => this.procesos = procesos);
  }

  onSelect(proceso: Proceso): void {
    this.selectedProceso = proceso;
    if (proceso.numSecEjecucion[0].exitosos == null) {
      this.calcularProgressBar(proceso.numSecEjecucion);
    }
    for (let i = 0; i < this.logs.length; i++) {
      console.log('Entro logs: ' + this.logs[i].compania);
    }

    for (let i = 0; i < this.procesos.length; i++) {
      console.log('Entro logs: ' + this.procesos[i].codigoProceso);
    }
  }
  gotoDetail(proceso: Proceso): void {
    //  this.router.navigate(['/detail', proceso.id]);
    if (!this.detalle) {
      this.detalle = !this.detalle;
    }
    this.log = false;
    if (this.detalle) {
      this.medida = '6';
    } else {
      this.medida = '12';
    }

  }
  gotoLog(proceso: Proceso): void {
    //  this.router.navigate(['/detail', proceso.id]);
    if (!this.log) {
      this.log = !this.log;
    }
    this.detalle = false;
    if (this.log) {
      this.medida = '6';
    } else {
      this.medida = '12';
    }

  }
  close() {
    this.log = false;
    this.detalle = false;
    this.medida = '12';
  }
  percentages(ejecucion: SecEjecucion): any[] {
    this.registros = [];
    this.registros.push(ejecucion.numRegistrosAProcesar);
    this.registros.push(ejecucion.numRegistrosConError);
    this.registros.push(ejecucion.numRegistrosExitosos);
    return this.registros;
  }
}
