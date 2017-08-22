import { SecEjecucion } from './secEjecucion';

export class Proceso {
  codigoProceso: string;
  fecha_programacion: number;
  listaParametros: string;
  numSecEjecucion: SecEjecucion[];
  numSecProgramacion: string;
}
//listSecEjecucion: SecEjecucion[];
//  listParametros: string[];
