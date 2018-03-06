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
var dialog_list_directores_component_1 = require("./dialog-list-directores/dialog-list-directores.component");
var ListDirectoresComponent = (function () {
    function ListDirectoresComponent(dialog, _UsuarioList) {
        this.dialog = dialog;
        this._UsuarioList = _UsuarioList;
        this.displayedColumns = ['nombre', 'usuario', 'legajo', 'area'];
    }
    ListDirectoresComponent.prototype.ngOnInit = function () {
        this.usuarios = this._UsuarioList.getDirectores();
        this.dataSource = new material_1.MatTableDataSource(this.usuarios);
    };
    ListDirectoresComponent.prototype.selectRow = function (value) {
        this.openDialog(value);
        console.log(value);
    };
    ListDirectoresComponent.prototype.openDialog = function (value) {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_list_directores_component_1.DialogListDirectoresComponent, {
            width: '600px',
            data: value
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
        });
    };
    ListDirectoresComponent = __decorate([
        core_1.Component({
            selector: 'app-list-directores',
            templateUrl: './list-directores.component.html',
            styleUrls: ['./list-directores.component.css'],
            providers: [usuarios_list_service_1.UsuarioListService]
        }),
        __metadata("design:paramtypes", [material_2.MatDialog,
            usuarios_list_service_1.UsuarioListService])
    ], ListDirectoresComponent);
    return ListDirectoresComponent;
}());
exports.ListDirectoresComponent = ListDirectoresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kaXJlY3RvcmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QtZGlyZWN0b3Jlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0ZBQW9GO0FBQ3BGLDhDQUF1RDtBQUd2RCw4Q0FBOEM7QUFDOUMsOEdBQTBHO0FBUzFHO0lBS0UsaUNBQ1MsTUFBaUIsRUFDaEIsWUFBZ0M7UUFEakMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFOMUMscUJBQWdCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQU92RCxDQUFDO0lBRUwsMENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksNkJBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCwyQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsNENBQVUsR0FBVixVQUFXLEtBQUs7UUFBaEIsaUJBVUM7UUFUQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnRUFBNkIsRUFBRTtZQUNoRSxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE5QlUsdUJBQXVCO1FBTm5DLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUUsMENBQWtCLENBQUU7U0FDbEMsQ0FBQzt5Q0FPaUIsb0JBQVM7WUFDRiwwQ0FBa0I7T0FQL0IsdUJBQXVCLENBK0JuQztJQUFELDhCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzdWFyaW9MaXN0U2VydmljZSB9IGZyb20gJy4uLy4uL2xpYnJlcmlhL3NlcnZpY2lvcy91c3Vhcmlvcy1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5cbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IERpYWxvZ0xpc3REaXJlY3RvcmVzQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctbGlzdC1kaXJlY3RvcmVzL2RpYWxvZy1saXN0LWRpcmVjdG9yZXMuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbGlzdC1kaXJlY3RvcmVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtZGlyZWN0b3Jlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QtZGlyZWN0b3Jlcy5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogWyBVc3VhcmlvTGlzdFNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0RGlyZWN0b3Jlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnMgPSBbJ25vbWJyZScsICd1c3VhcmlvJywgJ2xlZ2FqbycsICdhcmVhJ107XG4gIGRhdGFTb3VyY2U7XG4gIHVzdWFyaW9zO1xuICBkaWFsb2dSZXN1bHQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIF9Vc3VhcmlvTGlzdDogVXN1YXJpb0xpc3RTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c3VhcmlvcyA9IHRoaXMuX1VzdWFyaW9MaXN0LmdldERpcmVjdG9yZXMoKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMudXN1YXJpb3MpO1xuICB9XG5cbiAgc2VsZWN0Um93KHZhbHVlKSB7XG4gICAgdGhpcy5vcGVuRGlhbG9nKHZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIH1cblxuICBvcGVuRGlhbG9nKHZhbHVlKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dMaXN0RGlyZWN0b3Jlc0NvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICc2MDBweCcsXG4gICAgICBkYXRhOiB2YWx1ZVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgRGlhbG9nIGNsb3NlZDogYCArIHJlc3VsdCk7XG4gICAgICB0aGlzLmRpYWxvZ1Jlc3VsdCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxufVxuIl19