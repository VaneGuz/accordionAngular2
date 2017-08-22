/*import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zeeeeero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}
*/

import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1, name: 'generacion procesos masivos', codigoProceso: '95', numSecProgramacion: '34', fechaProgramacion: 2018, listSecEjecucion: [
          {
            codigoEntidad: '963', codigoEstado: '4147', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 490, numRegistrosConError: 10, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016
          }
          , {
            codigoEntidad: '852', codigoEstado: '7458', dsLoginEjecuta: 'luzevamos', numRegistrosAProcesar: 54,
            numRegistrosExitosos: 450, numRegistrosConError: 50, fechaInicioEjecucion: 20155, fechaFinEjecucion: 20156
          }
        ]
      },
      {
        id: 2, name: 'carga procesos masivos', codigoProceso: '58', numSecProgramacion: '52', fechaProgramacion: 2014, listSecEjecucion: [
          {
            codigoEntidad: '963', codigoEstado: '4147', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 490, numRegistrosConError: 10, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016
          }
          , {
            codigoEntidad: '852', codigoEstado: '7458', dsLoginEjecuta: 'luzevamos', numRegistrosAProcesar: 54,
            numRegistrosExitosos: 450, numRegistrosConError: 50, fechaInicioEjecucion: 20155, fechaFinEjecucion: 20156
          }
        ]
      },
      {
        id: 3, name: 'Evaluacion procesos masivos', codigoProceso: '15', numSecProgramacion: '25', fechaProgramacion: 2017, listSecEjecucion: [
          {
            codigoEntidad: '257', codigoEstado: '146', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 490, numRegistrosConError: 10, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016
          }
          , {
            codigoEntidad: '857', codigoEstado: '775', dsLoginEjecuta: 'luzevamos', numRegistrosAProcesar: 54,
            numRegistrosExitosos: 450, numRegistrosConError: 50, fechaInicioEjecucion: 20155, fechaFinEjecucion: 20156
          }
        ]
      }
    ];
    return { heroes };
  }
}
