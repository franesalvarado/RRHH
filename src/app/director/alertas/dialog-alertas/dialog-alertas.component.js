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
var DialogAlertasComponent = (function () {
    function DialogAlertasComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    DialogAlertasComponent.prototype.ngOnInit = function () {
    };
    DialogAlertasComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    DialogAlertasComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog-alertas',
            templateUrl: './dialog-alertas.component.html',
            styleUrls: ['./dialog-alertas.component.css']
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef,
            empleados_1.Empleado])
    ], DialogAlertasComponent);
    return DialogAlertasComponent;
}());
exports.DialogAlertasComponent = DialogAlertasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFsZXJ0YXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlhbG9nLWFsZXJ0YXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBEO0FBQzFELDhDQUFrRTtBQUNsRSxnRUFBOEQ7QUFPOUQ7SUFFRSxnQ0FBbUIsYUFBbUQsRUFDcEMsSUFBYztRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0M7UUFDcEMsU0FBSSxHQUFKLElBQUksQ0FBVTtJQUFJLENBQUM7SUFFckQseUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQVZVLHNCQUFzQjtRQUxsQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7UUFJRyxXQUFBLGFBQU0sQ0FBQywwQkFBZSxDQUFDLENBQUE7eUNBRFEsdUJBQVk7WUFDTixvQkFBUTtPQUhyQyxzQkFBc0IsQ0FXbEM7SUFBRCw2QkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRW1wbGVhZG8gfSBmcm9tICcuLi8uLi8uLi9saWJyZXJpYS9tb2RlbHMvZW1wbGVhZG9zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRpYWxvZy1hbGVydGFzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1hbGVydGFzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLWFsZXJ0YXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0FsZXJ0YXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0aGlzRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nQWxlcnRhc0NvbXBvbmVudD4sIFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRW1wbGVhZG8pIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIFxuICBvbkNsb3NlQ2FuY2VsKCkge1xuICAgIHRoaXMudGhpc0RpYWxvZ1JlZi5jbG9zZSgnQ2FuY2VsJyk7XG4gIH1cbn1cbiJdfQ==