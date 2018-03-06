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
var dialog_list_personal_rrhh_component_1 = require("./dialog-list-personal-rrhh/dialog-list-personal-rrhh.component");
var ListPersonalRrhhComponent = (function () {
    function ListPersonalRrhhComponent(dialog, _UsuarioList) {
        this.dialog = dialog;
        this._UsuarioList = _UsuarioList;
        this.displayedColumns = ['nombre', 'usuario', 'legajo', 'tipoUsuario'];
    }
    ListPersonalRrhhComponent.prototype.ngOnInit = function () {
        this.usuarios = this._UsuarioList.getPersonalRRHH();
        this.dataSource = new material_1.MatTableDataSource(this.usuarios);
    };
    ListPersonalRrhhComponent.prototype.selectRow = function (value) {
        this.openDialog(value);
        console.log(value);
    };
    ListPersonalRrhhComponent.prototype.openDialog = function (value) {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_list_personal_rrhh_component_1.DialogListPersonalRrhhComponent, {
            width: '600px',
            data: value
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
        });
    };
    ListPersonalRrhhComponent = __decorate([
        core_1.Component({
            selector: 'app-list-personal-rrhh',
            templateUrl: './list-personal-rrhh.component.html',
            styleUrls: ['./list-personal-rrhh.component.css'],
            providers: [usuarios_list_service_1.UsuarioListService]
        }),
        __metadata("design:paramtypes", [material_2.MatDialog,
            usuarios_list_service_1.UsuarioListService])
    ], ListPersonalRrhhComponent);
    return ListPersonalRrhhComponent;
}());
exports.ListPersonalRrhhComponent = ListPersonalRrhhComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1wZXJzb25hbC1ycmhoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QtcGVyc29uYWwtcnJoaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0ZBQW9GO0FBQ3BGLDhDQUF1RDtBQUd2RCw4Q0FBOEM7QUFDOUMsdUhBQWtIO0FBU2xIO0lBTUUsbUNBQ1MsTUFBaUIsRUFDaEIsWUFBZ0M7UUFEakMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFQMUMscUJBQWdCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQU9wQixDQUFDO0lBRS9DLDRDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDZCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0gsNkNBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELDhDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQWhCLGlCQVdEO1FBVkcsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUVBQStCLEVBQUU7WUFDbEUsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBOUJZLHlCQUF5QjtRQU5yQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1lBQ2pELFNBQVMsRUFBRSxDQUFFLDBDQUFrQixDQUFFO1NBQ2xDLENBQUM7eUNBUWlCLG9CQUFTO1lBQ0YsMENBQWtCO09BUi9CLHlCQUF5QixDQStCckM7SUFBRCxnQ0FBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc3VhcmlvTGlzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9saWJyZXJpYS9zZXJ2aWNpb3MvdXN1YXJpb3MtbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBEaWFsb2dMaXN0UGVyc29uYWxScmhoQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctbGlzdC1wZXJzb25hbC1ycmhoL2RpYWxvZy1saXN0LXBlcnNvbmFsLXJyaGguY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbGlzdC1wZXJzb25hbC1ycmhoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtcGVyc29uYWwtcnJoaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QtcGVyc29uYWwtcnJoaC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogWyBVc3VhcmlvTGlzdFNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0UGVyc29uYWxScmhoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsnbm9tYnJlJywgJ3VzdWFyaW8nLCAnbGVnYWpvJywgJ3RpcG9Vc3VhcmlvJ107XG4gIGRhdGFTb3VyY2U7XG4gIHVzdWFyaW9zO1xuICBkaWFsb2dSZXN1bHQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgX1VzdWFyaW9MaXN0OiBVc3VhcmlvTGlzdFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXN1YXJpb3MgPSB0aGlzLl9Vc3VhcmlvTGlzdC5nZXRQZXJzb25hbFJSSEgoKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMudXN1YXJpb3MpO1xuICB9XG5zZWxlY3RSb3codmFsdWUpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2codmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgfVxuXG4gIG9wZW5EaWFsb2codmFsdWUpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0xpc3RQZXJzb25hbFJyaGhDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNjAwcHgnLFxuICAgICAgZGF0YTogdmFsdWVcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coYERpYWxvZyBjbG9zZWQ6IGAgKyByZXN1bHQpO1xuICAgICAgdGhpcy5kaWFsb2dSZXN1bHQgPSByZXN1bHQ7XG4gICAgfSk7XG4gIFxufVxufVxuIl19