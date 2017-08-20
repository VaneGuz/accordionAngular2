import {Injectable} from '@angular/core';
import {Proceso} from './data/proceso';
import {PROCESO} from './mock-proceso';

@Injectable()
export class ProcesoService{
  getProceso(): Promise<Proceso[]> {
    return Promise.resolve(PROCESO);
  }
}
