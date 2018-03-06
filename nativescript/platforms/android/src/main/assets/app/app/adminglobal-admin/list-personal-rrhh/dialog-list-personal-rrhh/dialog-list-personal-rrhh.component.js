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
var DialogListPersonalRrhhComponent = (function () {
    function DialogListPersonalRrhhComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    DialogListPersonalRrhhComponent.prototype.ngOnInit = function () {
        this.selectedDireccion = "Direccion General de Recursos Humanos";
        this.selectedPrivilegio = this.data.funcion;
    };
    DialogListPersonalRrhhComponent.prototype.onCloseConfirm = function () {
        this.thisDialogRef.close('confirm');
        console.log(this.dataDialog);
    };
    DialogListPersonalRrhhComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    DialogListPersonalRrhhComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog-list-personal-rrhh',
            templateUrl: './dialog-list-personal-rrhh.component.html',
            styleUrls: ['./dialog-list-personal-rrhh.component.css']
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], DialogListPersonalRrhhComponent);
    return DialogListPersonalRrhhComponent;
}());
exports.DialogListPersonalRrhhComponent = DialogListPersonalRrhhComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWxpc3QtcGVyc29uYWwtcnJoaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2ctbGlzdC1wZXJzb25hbC1ycmhoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEwRDtBQUMxRCw4Q0FBa0U7QUFTbEU7SUFLRSx5Q0FBbUIsYUFBNEQsRUFDbkMsSUFBSTtRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBK0M7UUFDbkMsU0FBSSxHQUFKLElBQUksQ0FBQTtJQUFJLENBQUM7SUFFckQsa0RBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyx1Q0FBdUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDOUMsQ0FBQztJQUVELHdEQUFjLEdBQWQ7UUFHRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsdURBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUF0QlUsK0JBQStCO1FBTDNDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFdBQVcsRUFBRSw0Q0FBNEM7WUFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7U0FDekQsQ0FBQztRQU9hLFdBQUEsYUFBTSxDQUFDLDBCQUFlLENBQUMsQ0FBQTt5Q0FERix1QkFBWTtPQUxuQywrQkFBK0IsQ0F5QjNDO0lBQUQsc0NBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSwwRUFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEVtcGxlYWRvIH0gZnJvbSAnLi4vLi4vLi4vbGlicmVyaWEvbW9kZWxzL2VtcGxlYWRvcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRpYWxvZy1saXN0LXBlcnNvbmFsLXJyaGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWxpc3QtcGVyc29uYWwtcnJoaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy1saXN0LXBlcnNvbmFsLXJyaGguY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0xpc3RQZXJzb25hbFJyaGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkYXRhRGlhbG9nO1xuICBzZWxlY3RlZERpcmVjY2lvbjpzdHJpbmc7XG4gIHNlbGVjdGVkUHJpdmlsZWdpbzpzdHJpbmc7XG4gIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGhpc0RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0xpc3RQZXJzb25hbFJyaGhDb21wb25lbnQ+LCBcbiAgICAgICAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkRGlyZWNjaW9uID0gXCJEaXJlY2Npb24gR2VuZXJhbCBkZSBSZWN1cnNvcyBIdW1hbm9zXCI7XG4gICAgdGhpcy5zZWxlY3RlZFByaXZpbGVnaW8gPSB0aGlzLmRhdGEuZnVuY2lvbjtcbiAgfVxuXG4gIG9uQ2xvc2VDb25maXJtKCkge1xuICAgIC8vIHRoaXMuZGF0YURpYWxvZy52YWx1ZSA9IHRydWU7XG4gICAgLy8gdGhpcy5kYXRhRGlhbG9nLnRpcG9GYWx0YSA9IHRoaXMubXlDb250cm9sLnZhbHVlO1xuICAgIHRoaXMudGhpc0RpYWxvZ1JlZi5jbG9zZSgnY29uZmlybScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YURpYWxvZyk7XG4gIH1cblxuICBvbkNsb3NlQ2FuY2VsKCkge1xuICAgIHRoaXMudGhpc0RpYWxvZ1JlZi5jbG9zZSgnQ2FuY2VsJyk7XG4gIH1cblxuXG59XG4iXX0=