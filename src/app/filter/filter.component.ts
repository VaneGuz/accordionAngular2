import { Component } from '@angular/core';

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
  constructor() {
    this.estadoProceso.snEjecutado = true;
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
