import { Injectable } from '@angular/core';
import { Proceso } from './data/proceso';
import { PROCESO } from './mock-proceso';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ProcesoService {
  private procesosUrl = 'http://127.0.0.1:3000/1351/';  // URL to web api
  constructor(private http: Http) { }
  /*
    getProcesos(): Promise<Proceso[]> {
      return Promise.resolve(PROCESO);
    }
  */
  getProcesos(): Promise<Proceso[]> {
    return this.http.get(this.procesosUrl)
      .toPromise()
      .then(response => response.json().data as Proceso[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getProcesoSlowly(): Promise<Proceso[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getProcesos()), 2000);
    });
  }

  /*getProceso(id: number): Promise<Proceso> {
    return this.getProcesos()
      .then(procesos => procesos.find(proceso => proceso.id === id));
  }
*/
  getProceso(id: number): Promise<Proceso> {
    const url = `${this.procesosUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Proceso).catch(this.handleError);
  }

}
