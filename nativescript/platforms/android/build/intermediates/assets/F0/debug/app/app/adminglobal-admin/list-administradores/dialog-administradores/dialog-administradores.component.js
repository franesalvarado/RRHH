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
var DialogAdministradoresComponent = (function () {
    function DialogAdministradoresComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    DialogAdministradoresComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.selected = this.data.tipoUsuario;
    };
    DialogAdministradoresComponent.prototype.onCloseConfirm = function () {
        this.thisDialogRef.close('confirm');
        console.log(this.dataDialog);
    };
    DialogAdministradoresComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    DialogAdministradoresComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog-administradores',
            templateUrl: './dialog-administradores.component.html',
            styleUrls: ['./dialog-administradores.component.css']
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], DialogAdministradoresComponent);
    return DialogAdministradoresComponent;
}());
exports.DialogAdministradoresComponent = DialogAdministradoresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFkbWluaXN0cmFkb3Jlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2ctYWRtaW5pc3RyYWRvcmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEwRDtBQUMxRCw4Q0FBa0U7QUFRbEU7SUFLRSx3Q0FBbUIsYUFBMkQsRUFDbEMsSUFBSTtRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBOEM7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBQTtJQUFJLENBQUM7SUFDckQsaURBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDeEMsQ0FBQztJQUdELHVEQUFjLEdBQWQ7UUFHRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0RBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUF0QlUsOEJBQThCO1FBTDFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLFdBQVcsRUFBRSx5Q0FBeUM7WUFDdEQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7U0FDdEQsQ0FBQztRQU9hLFdBQUEsYUFBTSxDQUFDLDBCQUFlLENBQUMsQ0FBQTt5Q0FERix1QkFBWTtPQUxuQyw4QkFBOEIsQ0F1QjFDO0lBQUQscUNBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSx3RUFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEVtcGxlYWRvIH0gZnJvbSAnLi4vLi4vLi4vbGlicmVyaWEvbW9kZWxzL2VtcGxlYWRvcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kaWFsb2ctYWRtaW5pc3RyYWRvcmVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1hZG1pbmlzdHJhZG9yZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctYWRtaW5pc3RyYWRvcmVzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dBZG1pbmlzdHJhZG9yZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkYXRhRGlhbG9nO1xuICBzZWxlY3RlZDogc3RyaW5nO1xuXG5cbiAgY29uc3RydWN0b3IocHVibGljIHRoaXNEaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dBZG1pbmlzdHJhZG9yZXNDb21wb25lbnQ+LCBcbiAgICAgICAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhKSB7IH1cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRhLnRpcG9Vc3VhcmlvO1xuICB9XG5cblxuICBvbkNsb3NlQ29uZmlybSgpIHtcbiAgICAvLyB0aGlzLmRhdGFEaWFsb2cudmFsdWUgPSB0cnVlO1xuICAgIC8vIHRoaXMuZGF0YURpYWxvZy50aXBvRmFsdGEgPSB0aGlzLm15Q29udHJvbC52YWx1ZTtcbiAgICB0aGlzLnRoaXNEaWFsb2dSZWYuY2xvc2UoJ2NvbmZpcm0nKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFEaWFsb2cpO1xuICB9XG5cbiAgb25DbG9zZUNhbmNlbCgpIHtcbiAgICB0aGlzLnRoaXNEaWFsb2dSZWYuY2xvc2UoJ0NhbmNlbCcpO1xuICB9XG59XG4iXX0=