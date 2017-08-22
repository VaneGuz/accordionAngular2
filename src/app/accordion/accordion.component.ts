import { Component } from '@angular/core';
import { Proceso } from '../data/proceso';
import { PROCESO } from '../mock-proceso';
import { ProcesoService } from '../proceso.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [ProcesoService]
})
export class AccordionComponent implements OnInit {
  title = 'Accordion Component';
  procesos: Proceso[];
  selectedProceso: Proceso;
  isFirstOpen: any = true;
  detalle = false;
  log = false;
  medida: any = 'col-md-12';

  ngOnInit(): void {
    this.getProcesos();
  }

  constructor(private router: Router, private procesoService: ProcesoService) { }
  getProcesos(): void {
    this.procesoService.getProcesos().then(procesos => this.procesos = procesos);
  }
  onSelect(proceso: Proceso): void {
    this.selectedProceso = proceso;
    console.log('selected proceso' + this.selectedProceso.id);
  }
  gotoDetail(proceso: Proceso): void {
    //  this.router.navigate(['/detail', proceso.id]);
    if (!this.detalle) {
      this.detalle = !this.detalle;
    }
    this.log = false;
    if (this.detalle) {
      this.medida = '6';
    } else {
      this.medida = '12';
    }

  }
  gotoLog(proceso: Proceso): void {
    //  this.router.navigate(['/detail', proceso.id]);
    if (!this.log) {
      this.log = !this.log;
    }
    this.detalle = false;
    if (this.log) {
      this.medida = '6';
    } else {
      this.medida = '12';
    }

  }
  close() {
    this.log = false;
    this.detalle = false;
    this.medida = '12';
  }


}
