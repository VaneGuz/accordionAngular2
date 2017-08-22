import { Proceso } from './data/proceso';

export const PROCESO: Proceso[] = [
  {
    id: 1, name: 'generacion procesos masivos', codigoProceso: '95', numSecProgramacion: '34', fechaProgramacion: 2018, listSecEjecucion: [
      {
        codigoEntidad: '123', codigoEstado: '456', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
        numRegistrosExitosos: 490, numRegistrosConError: 10, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016
      }
      , {
        codigoEntidad: '456', codigoEstado: '789', dsLoginEjecuta: 'luzevamos', numRegistrosAProcesar: 54,
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
