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
  ngOnInit(): void {
    this.getProcesos();
  }
  title = 'Accordion Component';
  procesos: Proceso[];
  selectedProceso: Proceso;
  isFirstOpen: boolean = true;

  constructor(private router: Router, private procesoService: ProcesoService) { }
  getProcesos(): void {
    this.procesoService.getProceso().then(procesos => this.procesos = procesos);
  }
  onSelect(proceso: Proceso): void {
    this.selectedProceso = proceso;
    console.log("seleccted proceso " + this.selectedProceso.id);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProceso.id]);
  }
}
