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
var usuarios_list_service_1 = require("../../libreria/servicios/usuarios-list.service");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var dialog_administradores_component_1 = require("./dialog-administradores/dialog-administradores.component");
var ListAdministradoresComponent = (function () {
    function ListAdministradoresComponent(dialog, _UsuarioList) {
        this.dialog = dialog;
        this._UsuarioList = _UsuarioList;
        this.displayedColumns = ['nombre', 'usuario', 'legajo', 'tipoUsuario'];
    }
    ListAdministradoresComponent.prototype.ngOnInit = function () {
        this.usuarios = this._UsuarioList.getUsuariosAdmin();
        this.dataSource = new material_1.MatTableDataSource(this.usuarios);
    };
    ListAdministradoresComponent.prototype.selectRow = function (value) {
        this.openDialog(value);
        console.log(value);
    };
    ListAdministradoresComponent.prototype.openDialog = function (value) {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_administradores_component_1.DialogAdministradoresComponent, {
            width: '600px',
            data: value
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
        });
    };
    ListAdministradoresComponent = __decorate([
        core_1.Component({
            selector: 'app-list-administradores',
            templateUrl: './list-administradores.component.html',
            styleUrls: ['./list-administradores.component.css'],
            providers: [usuarios_list_service_1.UsuarioListService]
        }),
        __metadata("design:paramtypes", [material_2.MatDialog,
            usuarios_list_service_1.UsuarioListService])
    ], ListAdministradoresComponent);
    return ListAdministradoresComponent;
}());
exports.ListAdministradoresComponent = ListAdministradoresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1hZG1pbmlzdHJhZG9yZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1hZG1pbmlzdHJhZG9yZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELHdGQUFvRjtBQUNwRiw4Q0FBdUQ7QUFHdkQsOENBQThDO0FBQzlDLDhHQUEyRztBQVEzRztJQUtFLHNDQUNTLE1BQWlCLEVBQ2hCLFlBQWdDO1FBRGpDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBTjFDLHFCQUFnQixHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFPOUQsQ0FBQztJQUVMLCtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksNkJBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxnREFBUyxHQUFULFVBQVUsS0FBSztRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBR0QsaURBQVUsR0FBVixVQUFXLEtBQUs7UUFBaEIsaUJBV0Q7UUFWRyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpRUFBOEIsRUFBRTtZQUNqRSxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFoQ1ksNEJBQTRCO1FBTnhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFdBQVcsRUFBRSx1Q0FBdUM7WUFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7WUFDbkQsU0FBUyxFQUFFLENBQUUsMENBQWtCLENBQUU7U0FDbEMsQ0FBQzt5Q0FPaUIsb0JBQVM7WUFDRiwwQ0FBa0I7T0FQL0IsNEJBQTRCLENBaUN4QztJQUFELG1DQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzdWFyaW9MaXN0U2VydmljZSB9IGZyb20gJy4uLy4uL2xpYnJlcmlhL3NlcnZpY2lvcy91c3Vhcmlvcy1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5cbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IERpYWxvZ0FkbWluaXN0cmFkb3Jlc0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWFkbWluaXN0cmFkb3Jlcy9kaWFsb2ctYWRtaW5pc3RyYWRvcmVzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1saXN0LWFkbWluaXN0cmFkb3JlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWFkbWluaXN0cmFkb3Jlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QtYWRtaW5pc3RyYWRvcmVzLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbIFVzdWFyaW9MaXN0U2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RBZG1pbmlzdHJhZG9yZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zID0gWydub21icmUnLCAndXN1YXJpbycsICdsZWdham8nLCAndGlwb1VzdWFyaW8nXTtcbiAgZGF0YVNvdXJjZTtcbiAgdXN1YXJpb3M7XG4gIGRpYWxvZ1Jlc3VsdDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgX1VzdWFyaW9MaXN0OiBVc3VhcmlvTGlzdFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzdWFyaW9zID0gdGhpcy5fVXN1YXJpb0xpc3QuZ2V0VXN1YXJpb3NBZG1pbigpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy51c3Vhcmlvcyk7XG4gIH1cbiAgXG4gIHNlbGVjdFJvdyh2YWx1ZSkge1xuICAgIHRoaXMub3BlbkRpYWxvZyh2YWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICB9XG5cblxuICBvcGVuRGlhbG9nKHZhbHVlKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dBZG1pbmlzdHJhZG9yZXNDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNjAwcHgnLFxuICAgICAgZGF0YTogdmFsdWVcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coYERpYWxvZyBjbG9zZWQ6IGAgKyByZXN1bHQpO1xuICAgICAgdGhpcy5kaWFsb2dSZXN1bHQgPSByZXN1bHQ7XG4gICAgfSk7XG5cbn1cbn1cbiJdfQ==