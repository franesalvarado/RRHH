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
var router_1 = require("@angular/router");
var empleado_service_1 = require("../../libreria/servicios/empleado.service");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var dialog_table_component_1 = require("./dialog-table-faltas/dialog-table.component");
var ListadoMaterialComponent = (function () {
    function ListadoMaterialComponent(dialog, _route, _router, _empleadoService) {
        this.dialog = dialog;
        this._route = _route;
        this._router = _router;
        this._empleadoService = _empleadoService;
        this.parametro = null;
        this.displayedColumns = ['position', 'name', 'legajo', 'tipoContrato', 'confirmado'];
        this.direccion = 'Direccion de Gestion Informatizada';
        this.ELEMENT_DATA_SELECT = [];
    }
    ListadoMaterialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empleados = this._empleadoService.getEmpleados();
        console.log(this.empleados);
        this._route.params.forEach(function (params) {
            _this.parametro = params['page'];
            if (_this.parametro != null) {
                _this.ELEMENT_DATA_SELECT = [];
                for (var i in _this.empleados) {
                    if (_this.empleados[i].tipoContrato == _this.parametro) {
                        _this.ELEMENT_DATA_SELECT.push(_this.empleados[i]);
                    }
                }
                _this.dataSource = new material_1.MatTableDataSource(_this.ELEMENT_DATA_SELECT);
            }
            else {
                for (var i in _this.empleados) {
                    _this.ELEMENT_DATA_SELECT.push(_this.empleados[i]);
                    if (_this.empleados[i].cantFaltasMensual > 2) {
                        if (_this.empleados[i].cantFaltasMensual > 4) {
                            _this.ELEMENT_DATA_SELECT[i].color = "red";
                        }
                        else {
                            _this.ELEMENT_DATA_SELECT[i].color = "yellow";
                        }
                    }
                }
                _this.dataSource = new material_1.MatTableDataSource(_this.ELEMENT_DATA_SELECT);
            }
        });
    };
    ListadoMaterialComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    ListadoMaterialComponent.prototype.selectRow = function (value) {
        this.openDialog(value);
        console.log(value);
    };
    ListadoMaterialComponent.prototype.openDialog = function (value) {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_table_component_1.DialogTableComponent, {
            width: '600px',
            data: value
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
        });
    };
    ListadoMaterialComponent = __decorate([
        core_1.Component({
            selector: 'app-listado-material',
            templateUrl: './listado-material.component.html',
            styleUrls: ['./listado-material.component.css'],
            providers: [empleado_service_1.EmpleadoService]
        }),
        __metadata("design:paramtypes", [material_2.MatDialog,
            router_1.ActivatedRoute,
            router_1.Router,
            empleado_service_1.EmpleadoService])
    ], ListadoMaterialComponent);
    return ListadoMaterialComponent;
}());
exports.ListadoMaterialComponent = ListadoMaterialComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFkby1tYXRlcmlhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YWRvLW1hdGVyaWFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUU7QUFDakUsOEVBQTRFO0FBRTVFLDhDQUF1RDtBQUN2RCw4Q0FBOEM7QUFFOUMsdUZBQW9GO0FBU3BGO0lBU0Usa0NBQ1MsTUFBaUIsRUFDaEIsTUFBc0IsRUFDdEIsT0FBZSxFQUNmLGdCQUFpQztRQUhsQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBWnBDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFaEYsY0FBUyxHQUFHLG9DQUFvQyxDQUFDO1FBQ2pELHdCQUFtQixHQUFHLEVBQUUsQ0FBQztJQVNyQixDQUFDO0lBRUwsMkNBQVEsR0FBUjtRQUFBLGlCQThCQztRQTdCQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFjO1lBQ3RDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWhDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLG1CQUFtQixHQUFH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O1lBQ0csa0NBQWU7T0FiaEMsd0JBQXdCLENBMEVwQztJQUFELCtCQUFDO0NBQUEsQUExRUQsSUEwRUM7QUExRVksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFbXBsZWFkb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9saWJyZXJpYS9zZXJ2aWNpb3MvZW1wbGVhZG8uc2VydmljZSc7XG5pbXBvcnQgeyBFbXBsZWFkbyB9IGZyb20gJy4uLy4uL2xpYnJlcmlhL21vZGVscy9lbXBsZWFkb3MnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBEaWFsb2dUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLXRhYmxlLWZhbHRhcy9kaWFsb2ctdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbGlzdGFkby1tYXRlcmlhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0YWRvLW1hdGVyaWFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGFkby1tYXRlcmlhbC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogWyBFbXBsZWFkb1NlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0YWRvTWF0ZXJpYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgcGFyYW1ldHJvID0gbnVsbDtcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsncG9zaXRpb24nLCAnbmFtZScsICdsZWdham8nLCAndGlwb0NvbnRyYXRvJywgJ2NvbmZpcm1hZG8nXTtcbiAgZGF0YVNvdXJjZTtcbiAgZGlyZWNjaW9uID0gJ0RpcmVjY2lvbiBkZSBHZXN0aW9uIEluZm9ybWF0aXphZGEnO1xuICBFTEVNRU5UX0RBVEFfU0VMRUNUID0gW107XG4gIGVtcGxlYWRvcztcbiAgZGlhbG9nUmVzdWx0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfZW1wbGVhZG9TZXJ2aWNlOiBFbXBsZWFkb1NlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVtcGxlYWRvcyA9IHRoaXMuX2VtcGxlYWRvU2VydmljZS5nZXRFbXBsZWFkb3MoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVtcGxlYWRvcyk7XG4gICAgdGhpcy5fcm91dGUucGFyYW1zLmZvckVhY2goKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMucGFyYW1ldHJvID0gcGFyYW1zWydwYWdlJ107XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGFyYW1ldHJvKTtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1ldHJvICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLkVMRU1FTlRfREFUQV9TRUxFQ1QgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZW1wbGVhZG9zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbXBsZWFkb3NbaV0udGlwb0NvbnRyYXRvID09IHRoaXMucGFyYW1ldHJvKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEVMRU1FTlRfREFUQVtpXSk7XG4gICAgICAgICAgICAgIHRoaXMuRUxFTUVOVF9EQVRBX1NFTEVDVC5wdXNoKHRoaXMuZW1wbGVhZG9zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLkVMRU1FTlRfREFUQV9TRUxFQ1QpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZW1wbGVhZG9zKXtcbiAgICAgICAgICAgIHRoaXMuRUxFTUVOVF9EQVRBX1NFTEVDVC5wdXNoKHRoaXMuZW1wbGVhZG9zW2ldKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVtcGxlYWRvc1tpXS5jYW50RmFsdGFzTWVuc3VhbCA+IDIpe1xuICAgICAgICAgICAgICBpZiAodGhpcy5lbXBsZWFkb3NbaV0uY2FudEZhbHRhc01lbnN1YWwgPiA0KXtcbiAgICAgICAgICAgICAgICB0aGlzLkVMRU1FTlRfREFUQV9TRUxFQ1RbaV0uY29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5FTEVNRU5UX0RBVEFfU0VMRUNUW2ldLmNvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMuRUxFTUVOVF9EQVRBX1NFTEVDVCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgLy8gRmlsdHJvIGRlIGJ1c3F1ZWRhIGRlbCB0YWJsZVxuICBhcHBseUZpbHRlcihmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG4gICAgZmlsdGVyVmFsdWUgPSBmaWx0ZXJWYWx1ZS50cmltKCk7IC8vIFF1aXRhIGxvcyBlc3BhY2lvIGVuIGJsYW5jb1xuICAgIGZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKTsgLy8gTWF0VGFibGVEYXRhU291cmNlIGRlZmF1bHRzIHRvIGxvd2VyY2FzZSBtYXRjaGVzXG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlO1xuICB9XG5cbiAgLy8gQ3VhbmRvIGNsaXF1ZWFzIHVuYSBmaWxhLi4uXG4gIHNlbGVjdFJvdyh2YWx1ZSkge1xuICAgIHRoaXMub3BlbkRpYWxvZyh2YWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICB9XG5cbiAgb3BlbkRpYWxvZyh2YWx1ZSkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nVGFibGVDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNjAwcHgnLFxuICAgICAgZGF0YTogdmFsdWVcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coYERpYWxvZyBjbG9zZWQ6IGAgKyByZXN1bHQpO1xuICAgICAgdGhpcy5kaWFsb2dSZXN1bHQgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxufSJdfQ==