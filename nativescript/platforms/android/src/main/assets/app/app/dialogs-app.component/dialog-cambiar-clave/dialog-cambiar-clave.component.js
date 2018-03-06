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
var DialogCambiarClaveComponent = (function () {
    function DialogCambiarClaveComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    DialogCambiarClaveComponent.prototype.ngOnInit = function () {
    };
    DialogCambiarClaveComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    DialogCambiarClaveComponent.prototype.onCloseConfirm = function () {
        alert("Puto el que lee");
    };
    DialogCambiarClaveComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog-cambiar-clave',
            templateUrl: './dialog-cambiar-clave.component.html',
            styleUrls: ['./dialog-cambiar-clave.component.css']
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], DialogCambiarClaveComponent);
    return DialogCambiarClaveComponent;
}());
exports.DialogCambiarClaveComponent = DialogCambiarClaveComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNhbWJpYXItY2xhdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlhbG9nLWNhbWJpYXItY2xhdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBEO0FBQzFELDhDQUFrRTtBQU9sRTtJQUVFLHFDQUFtQixhQUF3RCxFQUN6QyxJQUFJO1FBRG5CLGtCQUFhLEdBQWIsYUFBYSxDQUEyQztRQUN6QyxTQUFJLEdBQUosSUFBSSxDQUFBO0lBQUksQ0FBQztJQUUzQyw4Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG1EQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0RBQWMsR0FBZDtRQUNFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFkVSwyQkFBMkI7UUFMdkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztTQUNwRCxDQUFDO1FBSUcsV0FBQSxhQUFNLENBQUMsMEJBQWUsQ0FBQyxDQUFBO3lDQURRLHVCQUFZO09BRm5DLDJCQUEyQixDQWdCdkM7SUFBRCxrQ0FBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGlhbG9nLWNhbWJpYXItY2xhdmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWNhbWJpYXItY2xhdmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctY2FtYmlhci1jbGF2ZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ2FtYmlhckNsYXZlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGhpc0RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0NhbWJpYXJDbGF2ZUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uQ2xvc2VDYW5jZWwoKSB7XG4gICAgdGhpcy50aGlzRGlhbG9nUmVmLmNsb3NlKCdDYW5jZWwnKTtcbiAgfVxuXG4gIG9uQ2xvc2VDb25maXJtKCl7XG4gICAgYWxlcnQoXCJQdXRvIGVsIHF1ZSBsZWVcIik7XG4gIH1cblxufVxuIl19