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
        codigoProceso: '95', fecha_programacion: 2018, listaParametros: null, numSecEjecucion: [
          {
            codigoEntidad: '963', codigoEstado: '4147', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 490, numRegistrosConError: 10, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016
          }
          , {
            codigoEntidad: '852', codigoEstado: '7458', dsLoginEjecuta: 'luzevamos', numRegistrosAProcesar: 54,
            numRegistrosExitosos: 450, numRegistrosConError: 50, fechaInicioEjecucion: 20155, fechaFinEjecucion: 20156
          }
        ], numSecProgramacion: '34', dsproceso: 'GENERACION MENSUAL DE RENTAS'
      },
      {
        codigoProceso: '95', fecha_programacion: 2018, listaParametros: null, numSecEjecucion: [
          {
            codigoEntidad: '963', codigoEstado: '4147', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 490, numRegistrosConError: 10, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016
          }
          , {
            codigoEntidad: '852', codigoEstado: '7458', dsLoginEjecuta: 'luzevamos', numRegistrosAProcesar: 54,
            numRegistrosExitosos: 450, numRegistrosConError: 50, fechaInicioEjecucion: 20155, fechaFinEjecucion: 20156
          }
        ], numSecProgramacion: '35', dsproceso: 'GENERACION MENSUAL DE RENTAS'
      },
      {
        codigoProceso: '95', fecha_programacion: 2018, listaParametros: null, numSecEjecucion: [
          {
            codigoEntidad: '963', codigoEstado: '4147', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 490, numRegistrosConError: 10, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016
          }
          , {
            codigoEntidad: '852', codigoEstado: '7458', dsLoginEjecuta: 'luzevamos', numRegistrosAProcesar: 54,
            numRegistrosExitosos: 450, numRegistrosConError: 50, fechaInicioEjecucion: 20155, fechaFinEjecucion: 20156
          }
        ], numSecProgramacion: '36', dsproceso: 'GENERACION MENSUAL DE RENTAS'
      }
    ];
    return { heroes };
  }
}
