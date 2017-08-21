import { Injectable } from '@angular/core';
import { Proceso } from './data/proceso';
import { PROCESO } from './mock-proceso';

@Injectable()
export class ProcesoService {
  getProcesos(): Promise<Proceso[]> {
    return Promise.resolve(PROCESO);
  }

  getProcesoSlowly(): Promise<Proceso[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getProcesos()), 2000);
    });
  }

  getProceso(id: number): Promise<Proceso> {
    return this.getProcesos()
      .then(procesos => procesos.find(proceso => proceso.id === id));
  }

}
