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
var DialogListDirectoresComponent = (function () {
    function DialogListDirectoresComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    DialogListDirectoresComponent.prototype.ngOnInit = function () {
        this.selected = this.data.area;
        this.selectedPrivilegio = "Director/a";
    };
    DialogListDirectoresComponent.prototype.onCloseConfirm = function () {
        this.thisDialogRef.close('confirm');
        console.log(this.dataDialog);
    };
    DialogListDirectoresComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    DialogListDirectoresComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog-list-directores',
            templateUrl: './dialog-list-directores.component.html',
            styleUrls: ['./dialog-list-directores.component.css']
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], DialogListDirectoresComponent);
    return DialogListDirectoresComponent;
}());
exports.DialogListDirectoresComponent = DialogListDirectoresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWxpc3QtZGlyZWN0b3Jlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2ctbGlzdC1kaXJlY3RvcmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEwRDtBQUMxRCw4Q0FBa0U7QUFRbEU7SUFJRSx1Q0FBbUIsYUFBMEQsRUFDakMsSUFBSTtRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBNkM7UUFDakMsU0FBSSxHQUFKLElBQUksQ0FBQTtJQUFJLENBQUM7SUFFckQsZ0RBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBRUQsc0RBQWMsR0FBZDtRQUdFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxxREFBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXJCVSw2QkFBNkI7UUFMekMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsV0FBVyxFQUFFLHlDQUF5QztZQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztTQUN0RCxDQUFDO1FBTWEsV0FBQSxhQUFNLENBQUMsMEJBQWUsQ0FBQyxDQUFBO3lDQURGLHVCQUFZO09BSm5DLDZCQUE2QixDQXVCekM7SUFBRCxvQ0FBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHNFQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRW1wbGVhZG8gfSBmcm9tICcuLi8uLi8uLi9saWJyZXJpYS9tb2RlbHMvZW1wbGVhZG9zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRpYWxvZy1saXN0LWRpcmVjdG9yZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWxpc3QtZGlyZWN0b3Jlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy1saXN0LWRpcmVjdG9yZXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0xpc3REaXJlY3RvcmVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGF0YURpYWxvZztcbiAgc2VsZWN0ZWQ6c3RyaW5nO1xuICBzZWxlY3RlZFByaXZpbGVnaW86c3RyaW5nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGhpc0RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0xpc3REaXJlY3RvcmVzQ29tcG9uZW50PiwgXG4gICAgICAgICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZGF0YS5hcmVhO1xuICAgIHRoaXMuc2VsZWN0ZWRQcml2aWxlZ2lvID0gXCJEaXJlY3Rvci9hXCI7XG4gIH1cblxuICBvbkNsb3NlQ29uZmlybSgpIHtcbiAgICAvLyB0aGlzLmRhdGFEaWFsb2cudmFsdWUgPSB0cnVlO1xuICAgIC8vIHRoaXMuZGF0YURpYWxvZy50aXBvRmFsdGEgPSB0aGlzLm15Q29udHJvbC52YWx1ZTtcbiAgICB0aGlzLnRoaXNEaWFsb2dSZWYuY2xvc2UoJ2NvbmZpcm0nKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFEaWFsb2cpO1xuICB9XG5cbiAgb25DbG9zZUNhbmNlbCgpIHtcbiAgICB0aGlzLnRoaXNEaWFsb2dSZWYuY2xvc2UoJ0NhbmNlbCcpO1xuICB9XG5cbn1cbiJdfQ==