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
    const procesos = /*[
      {
        codigoProceso: '95', fecha_programacion: 2018, listaParametros: null, numSecEjecucion: [
          {
            codigoEntidad: '963', codigoEstado: '4147', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 490, numRegistrosConError: 10, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016,
              exitosos: null, error: null, pendientes: null
          }
          , {
            codigoEntidad: '963', codigoEstado: '4147', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 200, numRegistrosConError: 150, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016,
              exitosos: null, error: null, pendientes: null
          }
        ], numSecProgramacion: '34', dsproceso: 'GENERACION MENSUAL DE RENTAS'
      },
      {
        codigoProceso: '95', fecha_programacion: 2018, listaParametros: null, numSecEjecucion: [
          {
            codigoEntidad: '963', codigoEstado: '4147', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 100, numRegistrosConError: 400, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016,
              exitosos: null, error: null, pendientes: null
          }
          , {
            codigoEntidad: '963', codigoEstado: '4147', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 10, numRegistrosConError: 480, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016,
              exitosos: null, error: null, pendientes: null
          }
        ], numSecProgramacion: '35', dsproceso: 'GENERACION MENSUAL DE RENTAS'
      },
      {
        codigoProceso: '95', fecha_programacion: 2018, listaParametros: null, numSecEjecucion: [
          {
            codigoEntidad: '963', codigoEstado: '4147', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 490, numRegistrosConError: 10, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016,
              exitosos: null, error: null, pendientes: null
          }
          , {
            codigoEntidad: '963', codigoEstado: '4147', dsLoginEjecuta: 'luzevamo', numRegistrosAProcesar: 500,
            numRegistrosExitosos: 490, numRegistrosConError: 10, fechaInicioEjecucion: 2015, fechaFinEjecucion: 2016,
              exitosos: null, error: null, pendientes: null
          }
        ], numSecProgramacion: '36', dsproceso: 'GENERACION MENSUAL DE RENTAS'
      }
    ];*/


    [
        {
            'codigoProceso': '13',
            'fecha_programacion': '11/01/2008',
            'fechaFinProceso': '12/01/2008',
            'fechaInicioProceso': '11/01/2008',
            'fechaProgramacion': '11/01/2008',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200712'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'YESSGOLO',
                    'fechaFinEjecucion': '12/01/2008',
                    'fechaInicioEjecucion': '11/01/2008',
                    'numRegistrosAProcesar': 3686,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 3686,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '27'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '12/01/2008',
            'fechaFinProceso': '13/01/2008',
            'fechaInicioProceso': '13/01/2008',
            'fechaProgramacion': '12/01/2008',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200712'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '088'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'ELIZCAME',
                    'fechaFinEjecucion': '13/01/2008',
                    'fechaInicioEjecucion': '13/01/2008',
                    'numRegistrosAProcesar': 651,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 651,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '28'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '12/01/2008',
            'fechaFinProceso': '13/01/2008',
            'fechaInicioProceso': '13/01/2008',
            'fechaProgramacion': '12/01/2008',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200712'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '093'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'ELIZCAME',
                    'fechaFinEjecucion': '13/01/2008',
                    'fechaInicioEjecucion': '13/01/2008',
                    'numRegistrosAProcesar': 36,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 36,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '29'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '13/01/2008',
            'fechaFinProceso': '15/01/2008',
            'fechaInicioProceso': '13/01/2008',
            'fechaProgramacion': '13/01/2008',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '2'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200712'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '2'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200712'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '4',
                    'dsLoginEjecuta': 'ELIZCAME',
                    'fechaFinEjecucion': '14/01/2008',
                    'fechaInicioEjecucion': '13/01/2008',
                    'numRegistrosAProcesar': 3686,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 2065,
                    'secuencia': 1
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '3',
                    'dsLoginEjecuta': 'ELIZCAME',
                    'fechaFinEjecucion': '14/01/2008',
                    'fechaInicioEjecucion': '14/01/2008',
                    'numRegistrosAProcesar': 1621,
                    'numRegistrosConError': 1,
                    'numRegistrosExitosos': 1620,
                    'secuencia': 2
                }
            ],
            'numSecProgramacion': '30'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '18/07/2008',
            'fechaFinProceso': '19/07/2008',
            'fechaInicioProceso': '18/07/2008',
            'fechaProgramacion': '18/07/2008',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200806'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'DANIARVI',
                    'fechaFinEjecucion': '19/07/2008',
                    'fechaInicioEjecucion': '18/07/2008',
                    'numRegistrosAProcesar': 3946,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 3946,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '31'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '21/11/2008',
            'fechaFinProceso': '27/11/2008',
            'fechaInicioProceso': '21/11/2008',
            'fechaProgramacion': '21/11/2008',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200810'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200810'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '3',
                    'dsLoginEjecuta': 'YESSGOLO',
                    'fechaFinEjecucion': '22/11/2008',
                    'fechaInicioEjecucion': '21/11/2008',
                    'numRegistrosAProcesar': 4396,
                    'numRegistrosConError': 145,
                    'numRegistrosExitosos': 4251,
                    'secuencia': 1
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'YESSGOLO',
                    'fechaFinEjecucion': '27/11/2008',
                    'fechaInicioEjecucion': '27/11/2008',
                    'numRegistrosAProcesar': 145,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 145,
                    'secuencia': 2
                }
            ],
            'numSecProgramacion': '32'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '27/11/2008',
            'fechaFinProceso': '27/11/2008',
            'fechaInicioProceso': '27/11/2008',
            'fechaProgramacion': '27/11/2008',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200810'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'R'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'YESSGOLO',
                    'fechaFinEjecucion': '27/11/2008',
                    'fechaInicioEjecucion': '27/11/2008',
                    'numRegistrosAProcesar': 0,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 0,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '33'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '23/12/2008',
            'fechaFinProceso': '24/12/2008',
            'fechaInicioProceso': '23/12/2008',
            'fechaProgramacion': '23/12/2008',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200811'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'DANIARVI',
                    'fechaFinEjecucion': '24/12/2008',
                    'fechaInicioEjecucion': '23/12/2008',
                    'numRegistrosAProcesar': 4514,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 4514,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '34'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '10/01/2009',
            'fechaFinProceso': '11/01/2009',
            'fechaInicioProceso': '10/01/2009',
            'fechaProgramacion': '10/01/2009',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200812'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200812'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '3',
                    'dsLoginEjecuta': 'DANIARVI',
                    'fechaFinEjecucion': '10/01/2009',
                    'fechaInicioEjecucion': '10/01/2009',
                    'numRegistrosAProcesar': 4653,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 3704,
                    'secuencia': 1
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'DANIARVI',
                    'fechaFinEjecucion': '11/01/2009',
                    'fechaInicioEjecucion': '11/01/2009',
                    'numRegistrosAProcesar': 949,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 949,
                    'secuencia': 2
                }
            ],
            'numSecProgramacion': '35'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '11/01/2009',
            'fechaFinProceso': '11/01/2009',
            'fechaInicioProceso': '11/01/2009',
            'fechaProgramacion': '11/01/2009',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200812'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '088'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'DANIARVI',
                    'fechaFinEjecucion': '11/01/2009',
                    'fechaInicioEjecucion': '11/01/2009',
                    'numRegistrosAProcesar': 728,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 728,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '36'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '11/01/2009',
            'fechaFinProceso': '11/01/2009',
            'fechaInicioProceso': '11/01/2009',
            'fechaProgramacion': '11/01/2009',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '093'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200812'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'DANIARVI',
                    'fechaFinEjecucion': '11/01/2009',
                    'fechaInicioEjecucion': '11/01/2009',
                    'numRegistrosAProcesar': 39,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 39,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '37'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '12/06/2009',
            'fechaFinProceso': '13/06/2009',
            'fechaInicioProceso': '12/06/2009',
            'fechaProgramacion': '12/06/2009',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200905'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'MARIOSZU',
                    'fechaFinEjecucion': '13/06/2009',
                    'fechaInicioEjecucion': '12/06/2009',
                    'numRegistrosAProcesar': 4884,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 4884,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '38'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '13/11/2009',
            'fechaFinProceso': '17/11/2009',
            'fechaInicioProceso': '13/11/2009',
            'fechaProgramacion': '13/11/2009',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200910'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '3',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '14/11/2009',
                    'fechaInicioEjecucion': '13/11/2009',
                    'numRegistrosAProcesar': 5153,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 5153,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '39'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '13/11/2009',
            'fechaFinProceso': '17/11/2009',
            'fechaInicioProceso': '14/11/2009',
            'fechaProgramacion': '13/11/2009',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '2'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200910'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '3',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '14/11/2009',
                    'fechaInicioEjecucion': '14/11/2009',
                    'numRegistrosAProcesar': 5153,
                    'numRegistrosConError': 1,
                    'numRegistrosExitosos': 2419,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '40'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '17/11/2009',
            'fechaFinProceso': '18/11/2009',
            'fechaInicioProceso': '17/11/2009',
            'fechaProgramacion': '17/11/2009',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200910'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '3',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '17/11/2009',
                    'fechaInicioEjecucion': '17/11/2009',
                    'numRegistrosAProcesar': 5153,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 0,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '41'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '17/11/2009',
            'fechaFinProceso': '19/11/2009',
            'fechaInicioProceso': '17/11/2009',
            'fechaProgramacion': '17/11/2009',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '2'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200910'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '2'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200910'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '4',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '18/11/2009',
                    'fechaInicioEjecucion': '17/11/2009',
                    'numRegistrosAProcesar': 5153,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 2919,
                    'secuencia': 1
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '19/11/2009',
                    'fechaInicioEjecucion': '19/11/2009',
                    'numRegistrosAProcesar': 2234,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 2234,
                    'secuencia': 2
                }
            ],
            'numSecProgramacion': '42'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '18/11/2009',
            'fechaFinProceso': '21/11/2009',
            'fechaInicioProceso': '19/11/2009',
            'fechaProgramacion': '18/11/2009',
            'listaParametros': [
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '3'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200910'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '3'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200910'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '3'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200910'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '4',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '19/11/2009',
                    'fechaInicioEjecucion': '19/11/2009',
                    'numRegistrosAProcesar': 5153,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 196,
                    'secuencia': 1
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '4',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '20/11/2009',
                    'fechaInicioEjecucion': '19/11/2009',
                    'numRegistrosAProcesar': 4957,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 3308,
                    'secuencia': 2
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '21/11/2009',
                    'fechaInicioEjecucion': '21/11/2009',
                    'numRegistrosAProcesar': 1649,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 1649,
                    'secuencia': 3
                }
            ],
            'numSecProgramacion': '43'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '11/12/2009',
            'fechaFinProceso': '14/12/2009',
            'fechaInicioProceso': '13/12/2009',
            'fechaProgramacion': '11/12/2009',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200911'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200911'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '3',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '13/12/2009',
                    'fechaInicioEjecucion': '13/12/2009',
                    'numRegistrosAProcesar': 5212,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 5212,
                    'secuencia': 1
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '14/12/2009',
                    'fechaInicioEjecucion': '14/12/2009',
                    'numRegistrosAProcesar': 0,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 0,
                    'secuencia': 2
                }
            ],
            'numSecProgramacion': '44'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '9/01/2010',
            'fechaFinProceso': '9/01/2010',
            'fechaInicioProceso': '9/01/2010',
            'fechaProgramacion': '9/01/2010',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200912'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '4',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '9/01/2010',
                    'fechaInicioEjecucion': '9/01/2010',
                    'numRegistrosAProcesar': 5267,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 1,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '45'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '9/01/2010',
            'fechaFinProceso': '11/01/2010',
            'fechaInicioProceso': '9/01/2010',
            'fechaProgramacion': '9/01/2010',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '2'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200912'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '2'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200912'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '4',
                    'dsLoginEjecuta': 'MARIOSZU',
                    'fechaFinEjecucion': '9/01/2010',
                    'fechaInicioEjecucion': '9/01/2010',
                    'numRegistrosAProcesar': 5267,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 684,
                    'secuencia': 1
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'MARIOSZU',
                    'fechaFinEjecucion': '11/01/2010',
                    'fechaInicioEjecucion': '10/01/2010',
                    'numRegistrosAProcesar': 4583,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 4583,
                    'secuencia': 2
                }
            ],
            'numSecProgramacion': '46'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '13/01/2010',
            'fechaFinProceso': '16/01/2010',
            'fechaInicioProceso': '13/01/2010',
            'fechaProgramacion': '13/01/2010',
            'listaParametros': [
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '3'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200912'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '3'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200912'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '3'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200912'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '3'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200912'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '4',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '13/01/2010',
                    'fechaInicioEjecucion': '13/01/2010',
                    'numRegistrosAProcesar': 5267,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 177,
                    'secuencia': 1
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '3',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '14/01/2010',
                    'fechaInicioEjecucion': '13/01/2010',
                    'numRegistrosAProcesar': 5090,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 1206,
                    'secuencia': 2
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '3',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '15/01/2010',
                    'fechaInicioEjecucion': '14/01/2010',
                    'numRegistrosAProcesar': 3884,
                    'numRegistrosConError': 1,
                    'numRegistrosExitosos': 2610,
                    'secuencia': 3
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '16/01/2010',
                    'fechaInicioEjecucion': '15/01/2010',
                    'numRegistrosAProcesar': 1274,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 1274,
                    'secuencia': 4
                }
            ],
            'numSecProgramacion': '47'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '15/01/2010',
            'fechaFinProceso': '16/01/2010',
            'fechaInicioProceso': '16/01/2010',
            'fechaProgramacion': '15/01/2010',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '088'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200912'
                },
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '088'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200912'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '3',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '16/01/2010',
                    'fechaInicioEjecucion': '16/01/2010',
                    'numRegistrosAProcesar': 738,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 738,
                    'secuencia': 1
                },
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '16/01/2010',
                    'fechaInicioEjecucion': '16/01/2010',
                    'numRegistrosAProcesar': 0,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 0,
                    'secuencia': 2
                }
            ],
            'numSecProgramacion': '48'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '15/01/2010',
            'fechaFinProceso': '16/01/2010',
            'fechaInicioProceso': '16/01/2010',
            'fechaProgramacion': '15/01/2010',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '200912'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '093'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '2',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '16/01/2010',
                    'fechaInicioEjecucion': '16/01/2010',
                    'numRegistrosAProcesar': 36,
                    'numRegistrosConError': 0,
                    'numRegistrosExitosos': 36,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '49'
        },
        {
            'codigoProceso': '13',
            'fecha_programacion': '25/06/2010',
            'fechaFinProceso': '12/09/2011',
            'fechaInicioProceso': '12/09/2011',
            'fechaProgramacion': '25/06/2010',
            'listaParametros': [
                {
                    'clave': 'CDCOMPANIACE',
                    'valor': '02'
                },
                {
                    'clave': 'CDGRUPO_PARTICIP',
                    'valor': '1'
                },
                {
                    'clave': 'NMPERIODOCE',
                    'valor': '201005'
                },
                {
                    'clave': 'CDTIPO_GENERACION_INT',
                    'valor': 'G'
                },
                {
                    'clave': 'CDRAMOCE',
                    'valor': '087'
                }
            ],
            'nombreProceso': 'GENERACIÓN MENSUAL DE PARTICIPACIÓN DE UTILIDADES DE RENTAS VITALICIAS',
            'numRegLog': 0,
            'numSecEjecucion': [
                {
                    'codigoEntidad': '13',
                    'codigoEstado': '3',
                    'dsLoginEjecuta': 'ANAMGIHE',
                    'fechaFinEjecucion': '12/09/2011',
                    'fechaInicioEjecucion': '12/09/2011',
                    'numRegistrosAProcesar': 29,
                    'numRegistrosConError': 1,
                    'numRegistrosExitosos': 28,
                    'secuencia': 1
                }
            ],
            'numSecProgramacion': '50'
        }
    ];
    return { procesos };
  }
}
