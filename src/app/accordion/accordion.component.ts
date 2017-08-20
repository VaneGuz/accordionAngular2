import { Component } from '@angular/core';
import {Proceso} from '../data/proceso';
import {PROCESO} from '../mock-proceso';
import { ProcesoService } from '../proceso.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [ProcesoService]
})
export class AccordionComponent implements OnInit {
  title = 'Accordion Component';
  procesos: Proceso[];
  isFirstOpen:boolean = true;
  constructor(private procesoService: ProcesoService) { }
  getProcesos(): void {
    this.procesoService.getProceso().then(procesos => this.procesos = procesos );
  }
  ngOnInit(): void {
    this.getProcesos();
  }
}
