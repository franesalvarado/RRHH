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
var empleados_1 = require("../../../libreria/models/empleados");
var forms_1 = require("@angular/forms");
var DialogTableComponent = (function () {
    function DialogTableComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.displayDate = new Date().toLocaleDateString();
        this.myControl = new forms_1.FormControl();
        this.selected = "Ausencia sin aviso";
        this.selectedConfirm = "Presente";
    }
    DialogTableComponent.prototype.ngOnInit = function () {
    };
    DialogTableComponent.prototype.onCloseConfirm = function () {
        this.thisDialogRef.close('confirm');
        if (this.selected == "Ausencia sin aviso" || this.selected == "Ausencia con aviso") {
            this.tipoFalta = {
                tipoFalta: this.selected,
                fecha: this.displayDate
            };
            console.log(this.tipoFalta);
        }
        else if (this.selected == "Presente" || this.selected == "Presente con llegada tarde") {
            this.tipoPresente = {
                tipoPresente: this.selected,
                fecha: this.displayDate
            };
            console.log(this.tipoPresente);
        }
    };
    DialogTableComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    DialogTableComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog-table',
            templateUrl: './dialog-table.component.html',
            styleUrls: ['./dialog-table.component.css']
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef,
            empleados_1.Empleado])
    ], DialogTableComponent);
    return DialogTableComponent;
}());
exports.DialogTableComponent = DialogTableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpYWxvZy10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEQ7QUFDMUQsOENBQWtFO0FBQ2xFLGdFQUF1RjtBQUV2Rix3Q0FBNkM7QUFVN0M7SUFZRSw4QkFBbUIsYUFBaUQsRUFDeEIsSUFBYztRQUR2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0M7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBVTtRQVoxRCxnQkFBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5QyxjQUFTLEdBQWdCLElBQUksbUJBQVcsRUFBRSxDQUFDO1FBRzNDLGFBQVEsR0FBRyxvQkFBb0IsQ0FBQztRQUNoQyxvQkFBZSxHQUFHLFVBQVUsQ0FBQztJQVE1QixDQUFDO0lBRUYsdUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw2Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxvQkFBb0IsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLG9CQUFvQixDQUFDLENBQUEsQ0FBQztZQUNsRixJQUFJLENBQUMsU0FBUyxHQUFHO2dCQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQ3hCLENBQUE7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksNEJBQTRCLENBQUMsQ0FBQSxDQUFDO1lBQ3RGLElBQUksQ0FBQyxZQUFZLEdBQUc7Z0JBQ2xCLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQ3hCLENBQUE7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELDRDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBdENVLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7UUFjYSxXQUFBLGFBQU0sQ0FBQywwQkFBZSxDQUFDLENBQUE7eUNBREYsdUJBQVk7WUFDSSxvQkFBUTtPQWIvQyxvQkFBb0IsQ0F3Q2hDO0lBQUQsMkJBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEVtcGxlYWRvLCBUaXBvRmFsdGEsIFRpcG9QcmVzZW50ZSB9IGZyb20gJy4uLy4uLy4uL2xpYnJlcmlhL21vZGVscy9lbXBsZWFkb3MnO1xuXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMvc3RhcnRXaXRoJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRpYWxvZy10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2ctdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctdGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ1RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheURhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICBteUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIGRhdGFEaWFsb2c7XG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gIHNlbGVjdGVkID0gXCJBdXNlbmNpYSBzaW4gYXZpc29cIjtcbiAgc2VsZWN0ZWRDb25maXJtID0gXCJQcmVzZW50ZVwiO1xuICB0aXBvRmFsdGE6IFRpcG9GYWx0YTtcbiAgdGlwb1ByZXNlbnRlOiBUaXBvUHJlc2VudGU7XG5cblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0aGlzRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nVGFibGVDb21wb25lbnQ+LCBcbiAgICAgICAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBFbXBsZWFkbykgXG4gIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkNsb3NlQ29uZmlybSgpIHtcbiAgICB0aGlzLnRoaXNEaWFsb2dSZWYuY2xvc2UoJ2NvbmZpcm0nKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSBcIkF1c2VuY2lhIHNpbiBhdmlzb1wiIHx8IHRoaXMuc2VsZWN0ZWQgPT0gXCJBdXNlbmNpYSBjb24gYXZpc29cIil7XG4gICAgICB0aGlzLnRpcG9GYWx0YSA9IHtcbiAgICAgICAgdGlwb0ZhbHRhOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICBmZWNoYTogdGhpcy5kaXNwbGF5RGF0ZVxuICAgICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMudGlwb0ZhbHRhKTtcbiAgICB9ZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSBcIlByZXNlbnRlXCIgfHwgdGhpcy5zZWxlY3RlZCA9PSBcIlByZXNlbnRlIGNvbiBsbGVnYWRhIHRhcmRlXCIpe1xuICAgICAgdGhpcy50aXBvUHJlc2VudGUgPSB7XG4gICAgICAgIHRpcG9QcmVzZW50ZTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgZmVjaGE6IHRoaXMuZGlzcGxheURhdGVcbiAgICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnRpcG9QcmVzZW50ZSk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZUNhbmNlbCgpIHtcbiAgICB0aGlzLnRoaXNEaWFsb2dSZWYuY2xvc2UoJ0NhbmNlbCcpO1xuICB9XG5cbn1cbiJdfQ==