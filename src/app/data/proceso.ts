import { SecEjecucion } from './secEjecucion';
import { Parametro } from './parametro';

export class Proceso {
  codigoProceso: string;
  listaParametros: Parametro[];
  numSecEjecucion: SecEjecucion[];
  numSecProgramacion: string;
  dsproceso: string;
  fechaInicioProceso: string;
  fechaFinProceso: string;
  fechaProgramacion: string;
  numRegLog: number ;
}


//  listParametros: string[];
