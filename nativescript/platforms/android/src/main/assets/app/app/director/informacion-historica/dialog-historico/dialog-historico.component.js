"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var empleado_service_1 = require("../../../libreria/servicios/empleado.service");
var material_2 = require("@angular/material");
var common_1 = require("@angular/common");
var DialogHistoricoComponent = (function () {
    function DialogHistoricoComponent(thisDialogRef, data, _EmpleadoService, _datePipe) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this._EmpleadoService = _EmpleadoService;
        this._datePipe = _datePipe;
        this.displayedColumns = ['fecha', 'tipoFalta'];
        this.agenteFaltas = [];
        this.legajoData = data.legajo;
        this.agentesFaltas = this._EmpleadoService.getEmpleadosFaltas();
        for (var i in this.agentesFaltas) {
            if (this.agentesFaltas[i].legajo == this.legajoData)
                this.faltasAux = this.agentesFaltas[i].tipoFalta;
        }
        for (var e in this.faltasAux) {
            this.agenteFaltas.push({ tipoFalta: this.faltasAux[e].tipoFalta, fecha: this._datePipe.transform(new Date(this.faltasAux[e].fecha)) });
        }
        this.dataSource = new material_2.MatTableDataSource(this.agenteFaltas);
    }
    DialogHistoricoComponent.prototype.ngOnInit = function () {
    };
    DialogHistoricoComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    DialogHistoricoComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    __decorate([
        core_1.ViewChild(material_2.MatSort),
        __metadata("design:type", material_2.MatSort)
    ], DialogHistoricoComponent.prototype, "sort", void 0);
    DialogHistoricoComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog-historico',
            templateUrl: './dialog-historico.component.html',
            styleUrls: ['./dialog-historico.component.css'],
            providers: [empleado_service_1.EmpleadoService, common_1.DatePipe]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, empleado_service_1.EmpleadoService,
            common_1.DatePipe])
    ], DialogHistoricoComponent);
    return DialogHistoricoComponent;
}());
exports.DialogHistoricoComponent = DialogHistoricoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhpc3Rvcmljby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2ctaGlzdG9yaWNvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFxRTtBQUNyRSw4Q0FBa0U7QUFDbEUsaUZBQStFO0FBTy9FLDhDQUFnRTtBQUNoRSwwQ0FBMkM7QUFTM0M7SUFVRSxrQ0FBbUIsYUFBcUQsRUFDdEMsSUFBSSxFQUM1QixnQkFBaUMsRUFDakMsU0FBbUI7UUFIVixrQkFBYSxHQUFiLGFBQWEsQ0FBd0M7UUFDdEMsU0FBSSxHQUFKLElBQUksQ0FBQTtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFaN0IscUJBQWdCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFJbkMsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFVdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDaEUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDdkksQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSw2QkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDJDQUFRLEdBQVI7SUFFQSxDQUFDO0lBQ0QsZ0RBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxrREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBNUJtQjtRQUFuQixnQkFBUyxDQUFDLGtCQUFPLENBQUM7a0NBQU8sa0JBQU87MERBQUM7SUFSdkIsd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7WUFDL0MsU0FBUyxFQUFFLENBQUUsa0NBQWUsRUFBRSxpQkFBUSxDQUFFO1NBQ3pDLENBQUM7UUFZRyxXQUFBLGFBQU0sQ0FBQywwQkFBZSxDQUFDLENBQUE7eUNBRFEsdUJBQVksVUFFbEIsa0NBQWU7WUFDdEIsaUJBQVE7T0FibEIsd0JBQXdCLENBcUNwQztJQUFELCtCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEVtcGxlYWRvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xpYnJlcmlhL3NlcnZpY2lvcy9lbXBsZWFkby5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycy9zdGFydFdpdGgnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMvbWFwJztcbmltcG9ydCB7IEVtcGxlYWRvRmFsdGFzLCBFbXBsZWFkb0ZhbHRhc05vTW9jaywgdGlwb0ZhbHRhTm9Nb2NrLCBUaXBvRmFsdGEgfSBmcm9tICcuLi8uLi8uLi9saWJyZXJpYS9tb2RlbHMvZW1wbGVhZG9zJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlLCBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kaWFsb2ctaGlzdG9yaWNvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1oaXN0b3JpY28uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctaGlzdG9yaWNvLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbIEVtcGxlYWRvU2VydmljZSwgRGF0ZVBpcGUgXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dIaXN0b3JpY29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zID0gWydmZWNoYScsICd0aXBvRmFsdGEnXTtcbiAgZGF0YVNvdXJjZTtcbiAgcHVibGljIGFnZW50ZXNGYWx0YXM6IEVtcGxlYWRvRmFsdGFzW107XG4gIHB1YmxpYyBmYWx0YXNBdXg7XG4gIHB1YmxpYyBhZ2VudGVGYWx0YXMgPSBbXTtcbiAgcHVibGljIGxlZ2Fqb0RhdGE6IG51bWJlcjtcblxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRoaXNEaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dIaXN0b3JpY29Db21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YSxcbiAgICBwcml2YXRlIF9FbXBsZWFkb1NlcnZpY2U6IEVtcGxlYWRvU2VydmljZSxcbiAgICBwcml2YXRlIF9kYXRlUGlwZTogRGF0ZVBpcGUpe1xuICAgIFxuICAgIHRoaXMubGVnYWpvRGF0YSA9IGRhdGEubGVnYWpvO1xuICAgIHRoaXMuYWdlbnRlc0ZhbHRhcyA9IHRoaXMuX0VtcGxlYWRvU2VydmljZS5nZXRFbXBsZWFkb3NGYWx0YXMoKTtcbiAgICBmb3IgKGxldCBpIGluIHRoaXMuYWdlbnRlc0ZhbHRhcykge1xuICAgIGlmICh0aGlzLmFnZW50ZXNGYWx0YXNbaV0ubGVnYWpvID09IHRoaXMubGVnYWpvRGF0YSlcbiAgICAgIHRoaXMuZmFsdGFzQXV4ID0gdGhpcy5hZ2VudGVzRmFsdGFzW2ldLnRpcG9GYWx0YTtcbiAgICB9XG4gICAgZm9yIChsZXQgZSBpbiB0aGlzLmZhbHRhc0F1eCl7XG4gICAgICB0aGlzLmFnZW50ZUZhbHRhcy5wdXNoKHt0aXBvRmFsdGE6IHRoaXMuZmFsdGFzQXV4W2VdLnRpcG9GYWx0YSwgZmVjaGE6IHRoaXMuX2RhdGVQaXBlLnRyYW5zZm9ybShuZXcgRGF0ZSh0aGlzLmZhbHRhc0F1eFtlXS5mZWNoYSkpfSk7XG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5hZ2VudGVGYWx0YXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuICBvbkNsb3NlQ2FuY2VsKCkge1xuICAgIHRoaXMudGhpc0RpYWxvZ1JlZi5jbG9zZSgnQ2FuY2VsJyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cbn1cblxuXG4iXX0=