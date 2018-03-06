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
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var dialog_historico_component_1 = require("./dialog-historico/dialog-historico.component");
var empleado_service_1 = require("../../libreria/servicios/empleado.service");
var InformacionHistoricaComponent = (function () {
    function InformacionHistoricaComponent(dialog, _empleadoService) {
        this.dialog = dialog;
        this._empleadoService = _empleadoService;
        this.displayedColumns = ['position', 'name', 'legajo', 'tipoContrato'];
    }
    InformacionHistoricaComponent.prototype.ngOnInit = function () {
        this.empleados = this._empleadoService.getEmpleados();
        this.dataSource = new material_1.MatTableDataSource(this.empleados);
    };
    InformacionHistoricaComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    InformacionHistoricaComponent.prototype.selectRow = function (value) {
        this.openDialog(value);
        console.log(value);
    };
    InformacionHistoricaComponent.prototype.openDialog = function (value) {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_historico_component_1.DialogHistoricoComponent, {
            width: '600px',
            data: value
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
        });
    };
    InformacionHistoricaComponent = __decorate([
        core_1.Component({
            selector: 'app-informacion-historica',
            templateUrl: './informacion-historica.component.html',
            styleUrls: ['./informacion-historica.component.css'],
            providers: [empleado_service_1.EmpleadoService]
        }),
        __metadata("design:paramtypes", [material_2.MatDialog,
            empleado_service_1.EmpleadoService])
    ], InformacionHistoricaComponent);
    return InformacionHistoricaComponent;
}());
exports.InformacionHistoricaComponent = InformacionHistoricaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb3JtYWNpb24taGlzdG9yaWNhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm9ybWFjaW9uLWhpc3RvcmljYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFDbEQsOENBQXVEO0FBQ3ZELDhDQUE4QztBQUc5Qyw0RkFBeUY7QUFDekYsOEVBQTRFO0FBUTVFO0lBTUUsdUNBQ1MsTUFBaUIsRUFDaEIsZ0JBQWlDO1FBRGxDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQU4zQyxxQkFBZ0IsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBTzlELENBQUM7SUFFTCxnREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDZCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsbURBQVcsR0FBWCxVQUFZLFdBQW1CO1FBQzdCLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUVELGlEQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrREFBVSxHQUFWLFVBQVcsS0FBSztRQUFoQixpQkFVQztRQVRDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFEQUF3QixFQUFFO1lBQzNELEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXJDVSw2QkFBNkI7UUFOekMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztZQUNwRCxTQUFTLEVBQUUsQ0FBRSxrQ0FBZSxDQUFFO1NBQy9CLENBQUM7eUNBUWlCLG9CQUFTO1lBQ0Usa0NBQWU7T0FSaEMsNkJBQTZCLENBc0N6QztJQUFELG9DQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksc0VBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEVtcGxlYWRvIH0gZnJvbSAnLi4vLi4vbGlicmVyaWEvbW9kZWxzL2VtcGxlYWRvcyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IERpYWxvZ0hpc3Rvcmljb0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWhpc3Rvcmljby9kaWFsb2ctaGlzdG9yaWNvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbXBsZWFkb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9saWJyZXJpYS9zZXJ2aWNpb3MvZW1wbGVhZG8uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1pbmZvcm1hY2lvbi1oaXN0b3JpY2EnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5mb3JtYWNpb24taGlzdG9yaWNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5mb3JtYWNpb24taGlzdG9yaWNhLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbIEVtcGxlYWRvU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIEluZm9ybWFjaW9uSGlzdG9yaWNhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlhbG9nUmVzdWx0O1xuICBkaXNwbGF5ZWRDb2x1bW5zID0gWydwb3NpdGlvbicsICduYW1lJywgJ2xlZ2FqbycsICd0aXBvQ29udHJhdG8nXTtcbiAgZGF0YVNvdXJjZTtcbiAgZW1wbGVhZG9zO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIF9lbXBsZWFkb1NlcnZpY2U6IEVtcGxlYWRvU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZW1wbGVhZG9zID0gdGhpcy5fZW1wbGVhZG9TZXJ2aWNlLmdldEVtcGxlYWRvcygpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5lbXBsZWFkb3MpO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIGZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWUudHJpbSgpOyAvLyBSZW1vdmUgd2hpdGVzcGFjZVxuICAgIGZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKTsgLy8gTWF0VGFibGVEYXRhU291cmNlIGRlZmF1bHRzIHRvIGxvd2VyY2FzZSBtYXRjaGVzXG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlO1xuICB9XG5cbiAgc2VsZWN0Um93KHZhbHVlKSB7XG4gICAgdGhpcy5vcGVuRGlhbG9nKHZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIH1cblxuICBvcGVuRGlhbG9nKHZhbHVlKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dIaXN0b3JpY29Db21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNjAwcHgnLFxuICAgICAgZGF0YTogdmFsdWVcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coYERpYWxvZyBjbG9zZWQ6IGAgKyByZXN1bHQpO1xuICAgICAgdGhpcy5kaWFsb2dSZXN1bHQgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cbn0iXX0=