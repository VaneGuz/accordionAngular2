import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Proceso } from '../data/proceso';
import { Consulta } from '../data/consulta';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  title = 'Filter Component';
  estadoProceso = {
    snProgramado: false,
    snEjecutado: false
  };
  accordionComponent: AccordionComponent;
  consultaOutput = new Consulta();
  procesos: Proceso[];
  fechaActual = new Date();
  fechaAnterior = new Date();
  ngOnInit(): void {
    this.estadoProceso.snEjecutado = true;
    this.fechaActual = new Date();
    //console.log('Fecha actual' + this.fechaActual.toLocaleDateString());
    this.fechaAnterior.setDate(this.fechaActual.getDate() - 2);
  //  console.log('Fecha actual + 1: ' + this.fechaAnterior.toLocaleDateString()); //15/10/2017
    this.consultar();
  }
  constructor() { }
  nuevaConsulta() {
    this.consultaOutput = new Consulta();
    this.onChangeEstadoProceso(1);
  }
  consultar() {
    this.consultaOutput.snEjecutado = this.estadoProceso.snEjecutado;
    this.consultaOutput.snProgramado = this.estadoProceso.snProgramado;
    this.consultaOutput.fechaInicio = this.fechaAnterior.toLocaleDateString();
    this.consultaOutput.fechaFin = this.fechaActual.toLocaleDateString();
    this.consultaOutput.codigoProceso = null;
    //console.log('consulta: ' + JSON.stringify(this.consultaOutput));
  }

  onChangeEstadoProceso(estado: number) {
    if (estado === 1) {
      this.estadoProceso.snEjecutado = true;
      this.estadoProceso.snProgramado = false;
    } else if (estado === 2) {
      this.estadoProceso.snEjecutado = false;
      this.estadoProceso.snProgramado = true;
    }
  }
}
