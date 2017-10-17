import { Component } from '@angular/core';
import { Consulta } from '../data/consulta';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  title = 'Filter Component';
  estadoProceso = {
    snProgramado: false,
    snEjecutado: false
  };
  consulta = new Consulta();
  constructor() {
    this.estadoProceso.snEjecutado = true;
  }
  nuevaConsulta() {
    this.consulta = new Consulta();

    this.onChangeEstadoProceso(1);
  }
  consultar() {
    this.consulta.snEjecutado = this.estadoProceso.snEjecutado;
    this.consulta.snProgramado= this.estadoProceso.snProgramado;
    console.log('consulta: ' + JSON.stringify(this.consulta));

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
