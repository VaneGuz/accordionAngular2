var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ProcesoService } from '../proceso.service';
export var AccordionComponent = (function () {
    function AccordionComponent(procesoService) {
        this.procesoService = procesoService;
        this.title = 'Accordion Component';
        this.isFirstOpen = true;
    }
    AccordionComponent.prototype.getProcesos = function () {
        var _this = this;
        this.procesoService.getProceso().then(function (procesos) { return _this.procesos = procesos; });
    };
    AccordionComponent.prototype.ngOnInit = function () {
        this.getProcesos();
    };
    AccordionComponent = __decorate([
        Component({
            selector: 'app-accordion',
            templateUrl: './accordion.component.html',
            styleUrls: ['./accordion.component.css'],
            providers: [ProcesoService]
        }), 
        __metadata('design:paramtypes', [ProcesoService])
    ], AccordionComponent);
    return AccordionComponent;
}());
//# sourceMappingURL=C:/angular2/accordion/src/app/accordion/accordion.component.js.map