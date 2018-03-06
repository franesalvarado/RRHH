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
var forms_1 = require("@angular/forms");
var startWith_1 = require("rxjs/operators/startWith");
var map_1 = require("rxjs/operators/map");
var AgregarUsuarioComponent = (function () {
    function AgregarUsuarioComponent() {
        this.myControl = new forms_1.FormControl();
        this.options = ['Direccion de Gestion Informatizada', 'Direccion General de Recursos Humanos', 'Direccion de Secretaria Privada'];
    }
    AgregarUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.filter(val); }));
    };
    AgregarUsuarioComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(val.toLowerCase()) === 0; });
    };
    AgregarUsuarioComponent = __decorate([
        core_1.Component({
            selector: 'app-agregar-usuario',
            templateUrl: './agregar-usuario.component.html',
            styleUrls: ['./agregar-usuario.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AgregarUsuarioComponent);
    return AgregarUsuarioComponent;
}());
exports.AgregarUsuarioComponent = AgregarUsuarioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdyZWdhci11c3VhcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFncmVnYXItdXN1YXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0NBQTJDO0FBRTNDLHNEQUFtRDtBQUNuRCwwQ0FBdUM7QUFPdkM7SUFLRTtRQUpBLGNBQVMsR0FBZ0IsSUFBSSxtQkFBVyxFQUFFLENBQUM7UUFDM0MsWUFBTyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsdUNBQXVDLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztJQUc3RyxDQUFDO0lBRWpCLDBDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNyRCxxQkFBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLFNBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRCx3Q0FBTSxHQUFOLFVBQU8sR0FBVztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBckQsQ0FBcUQsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFoQlUsdUJBQXVCO1FBTG5DLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzs7T0FDVyx1QkFBdUIsQ0FpQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzL3N0YXJ0V2l0aCc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMvbWFwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFncmVnYXItdXN1YXJpbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZ3JlZ2FyLXVzdWFyaW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZ3JlZ2FyLXVzdWFyaW8uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFncmVnYXJVc3VhcmlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbXlDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBvcHRpb25zID0gWydEaXJlY2Npb24gZGUgR2VzdGlvbiBJbmZvcm1hdGl6YWRhJywgJ0RpcmVjY2lvbiBHZW5lcmFsIGRlIFJlY3Vyc29zIEh1bWFub3MnLCAnRGlyZWNjaW9uIGRlIFNlY3JldGFyaWEgUHJpdmFkYSddO1xuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAodmFsID0+IHRoaXMuZmlsdGVyKHZhbCkpXG4gICAgKTtcbiAgfVxuICBcbiAgZmlsdGVyKHZhbDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbC50b0xvd2VyQ2FzZSgpKSA9PT0gMCk7XG4gIH1cbn1cbiJdfQ==