import { Injectable } from '@angular/core';
import { Log } from './data/log';
import { Proceso } from './data/proceso';
import { Consulta } from './data/consulta';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { RequestOptions } from '@angular/http';
import {
  Observable,
  Subject
} from 'rxjs/Rx';

@Injectable()
export class ProcesoService {
  private procesosUrl = 'http://localhost:7001/PlataformaRentas/api/monitor-masivos/consultar-procesos';  // URL to web api
  private procesosMock = 'api/procesos';
  private logMock = 'api/logs';

  constructor(private http: Http) { }

  resp: Promise<Proceso[]>;

  getProcesos(): Promise<Proceso[]> {
    return this.http.get(this.procesosMock)
      .toPromise()
      .then(response => response.json().data as Proceso[])
      .catch(this.handleError);
  }

  getLog(): Promise<Log[]> {
    return this.http.get(this.logMock)
      .toPromise()
      .then(response => response.json().data[0] as Log[])
      .catch(this.handleError);
      //    .then(response => response.json().data as Log[])
  }

/*
  getProcesos(consulta:Consulta): Promise<Proceso[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.resp = this.http.post(this.procesosUrl, JSON.stringify(consulta) , options).toPromise()
      .then(response => response.json() as Proceso[])
      .catch(this.handleError);
    console.log('Post ejecutado');

    return this.resp;
  }*/
  /*
    getProcesos(): Observable<Proceso[]> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this.resp = this.http.post(this.procesosUrl, null, options).map(response => response.json().data as Proceso[])
        .catch(this.handleError);
      console.log("Post ejecutado");
      console.log("Post ejecutado");
      return this.resp;
    }
    */



  /*private extractData(res: Response) {
  let body = res.json();
      return body.data || {};
  }*/

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


  getProceso(id: number): Promise<Proceso> {
    const url = `${this.procesosUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Proceso).catch(this.handleError);
  }

}

/*
  getProcesos(): Promise<Proceso[]> {
    return Promise.resolve(PROCESO);
  }
*/

/*getProceso(id: number): Promise<Proceso> {
  return this.getProcesos()
    .then(procesos => procesos.find(proceso => proceso.id === id));
}
*/
/*getProcesos(): Observable<Proceso[]> {
  return this.http.get(this.jsonFileURL)
  .map((response: Response) => {
          return <Proceso[]> response.json()
      })
    .catch(this.handleError);
}
*/
