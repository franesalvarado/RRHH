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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var empleado_service_1 = require("../../libreria/servicios/empleado.service");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var dialog_alertas_component_1 = require("./dialog-alertas/dialog-alertas.component");
var AlertasComponent = (function () {
    function AlertasComponent(dialog, _empleadoService) {
        this.dialog = dialog;
        this._empleadoService = _empleadoService;
        this.displayedColumns = ['position', 'name', 'legajo', 'tipoContrato'];
        this.direccion = 'Direccion de Gestion Informatizada';
        this.ELEMENT_DATA_SELECT = [];
    }
    AlertasComponent.prototype.ngOnInit = function () {
        this.empleados = this._empleadoService.getEmpleados();
        console.log(this.empleados);
        for (var i in this.empleados) {
            if (this.empleados[i].cantFaltasMensual > 2) {
                this.ELEMENT_DATA_SELECT.push(this.empleados[i]);
            }
        }
        this.dataSource = new material_1.MatTableDataSource(this.ELEMENT_DATA_SELECT);
    };
    AlertasComponent.prototype.selectRow = function (value) {
        this.openDialog(value);
        console.log(value);
    };
    AlertasComponent.prototype.openDialog = function (value) {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_alertas_component_1.DialogAlertasComponent, {
            width: '600px',
            data: value
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
        });
    };
    AlertasComponent = __decorate([
        core_1.Component({
            selector: 'app-alertas',
            templateUrl: './alertas.component.html',
            styleUrls: ['./alertas.component.css'],
            providers: [empleado_service_1.EmpleadoService]
        }),
        __metadata("design:paramtypes", [material_2.MatDialog,
            empleado_service_1.EmpleadoService])
    ], AlertasComponent);
    return AlertasComponent;
}());
exports.AlertasComponent = AlertasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRhcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGVydGFzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCw4RUFBNEU7QUFFNUUsOENBQXVEO0FBRXZELDhDQUE4QztBQUM5QyxzRkFBbUY7QUFRbkY7SUFRRSwwQkFDUyxNQUFpQixFQUNoQixnQkFBaUM7UUFEbEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBVDNDLHFCQUFnQixHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFbEUsY0FBUyxHQUFHLG9DQUFvQyxDQUFDO1FBQ2pELHdCQUFtQixHQUFHLEVBQUUsQ0FBQztJQU9yQixDQUFDO0lBRUwsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksNkJBQWtCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUdDLG9DQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUFoQixpQkFVQztRQVRDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlEQUFzQixFQUFFO1lBQ3pELEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXhDUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsU0FBUyxFQUFFLENBQUUsa0NBQWUsQ0FBRTtTQUMvQixDQUFDO3lDQVVpQixvQkFBUztZQUNFLGtDQUFlO09BVmhDLGdCQUFnQixDQXlDNUI7SUFBRCx1QkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbXBsZWFkb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9saWJyZXJpYS9zZXJ2aWNpb3MvZW1wbGVhZG8uc2VydmljZSc7XG5pbXBvcnQgeyBFbXBsZWFkbyB9IGZyb20gJy4uLy4uL2xpYnJlcmlhL21vZGVscy9lbXBsZWFkb3MnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBEaWFsb2dBbGVydGFzQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctYWxlcnRhcy9kaWFsb2ctYWxlcnRhcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWxlcnRhcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydGFzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnRhcy5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogWyBFbXBsZWFkb1NlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydGFzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsncG9zaXRpb24nLCAnbmFtZScsICdsZWdham8nLCAndGlwb0NvbnRyYXRvJ107XG4gIGRhdGFTb3VyY2U7XG4gIGRpcmVjY2lvbiA9ICdEaXJlY2Npb24gZGUgR2VzdGlvbiBJbmZvcm1hdGl6YWRhJztcbiAgRUxFTUVOVF9EQVRBX1NFTEVDVCA9IFtdO1xuICBlbXBsZWFkb3M7XG4gIGRpYWxvZ1Jlc3VsdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHJpdmF0ZSBfZW1wbGVhZG9TZXJ2aWNlOiBFbXBsZWFkb1NlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVtcGxlYWRvcyA9IHRoaXMuX2VtcGxlYWRvU2VydmljZS5nZXRFbXBsZWFkb3MoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVtcGxlYWRvcyk7XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLmVtcGxlYWRvcyl7XG4gICAgICBpZiAodGhpcy5lbXBsZWFkb3NbaV0uY2FudEZhbHRhc01lbnN1YWwgPiAyKXtcbiAgICAgICAgdGhpcy5FTEVNRU5UX0RBVEFfU0VMRUNULnB1c2godGhpcy5lbXBsZWFkb3NbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMuRUxFTUVOVF9EQVRBX1NFTEVDVCk7XG4gIH1cblxuICAgIC8vIEN1YW5kbyBjbGlxdWVhcyB1bmEgZmlsYS4uLlxuICAgIHNlbGVjdFJvdyh2YWx1ZSkge1xuICAgICAgdGhpcy5vcGVuRGlhbG9nKHZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICB9XG4gIFxuICAgIG9wZW5EaWFsb2codmFsdWUpIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQWxlcnRhc0NvbXBvbmVudCwge1xuICAgICAgICB3aWR0aDogJzYwMHB4JyxcbiAgICAgICAgZGF0YTogdmFsdWVcbiAgICAgIH0pO1xuICBcbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgRGlhbG9nIGNsb3NlZDogYCArIHJlc3VsdCk7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfVxufVxuIl19