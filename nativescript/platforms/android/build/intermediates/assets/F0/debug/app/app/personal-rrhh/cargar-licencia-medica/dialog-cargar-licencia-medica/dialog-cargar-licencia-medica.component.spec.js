"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var dialog_cargar_licencia_medica_component_1 = require("./dialog-cargar-licencia-medica.component");
describe('DialogCargarLicenciaMedicaComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dialog_cargar_licencia_medica_component_1.DialogCargarLicenciaMedicaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dialog_cargar_licencia_medica_component_1.DialogCargarLicenciaMedicaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNhcmdhci1saWNlbmNpYS1tZWRpY2EuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2ctY2FyZ2FyLWxpY2VuY2lhLW1lZGljYS5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUF5RTtBQUV6RSxxR0FBZ0c7QUFFaEcsUUFBUSxDQUFDLHFDQUFxQyxFQUFFO0lBQzlDLElBQUksU0FBOEMsQ0FBQztJQUNuRCxJQUFJLE9BQThELENBQUM7SUFFbkUsVUFBVSxDQUFDLGVBQUssQ0FBQztRQUNmLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsWUFBWSxFQUFFLENBQUUsNkVBQW1DLENBQUU7U0FDdEQsQ0FBQzthQUNELGlCQUFpQixFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLFVBQVUsQ0FBQztRQUNULE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw2RUFBbUMsQ0FBQyxDQUFDO1FBQ3ZFLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdEMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUNsQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzeW5jLCBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgRGlhbG9nQ2FyZ2FyTGljZW5jaWFNZWRpY2FDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy1jYXJnYXItbGljZW5jaWEtbWVkaWNhLmNvbXBvbmVudCc7XG5cbmRlc2NyaWJlKCdEaWFsb2dDYXJnYXJMaWNlbmNpYU1lZGljYUNvbXBvbmVudCcsICgpID0+IHtcbiAgbGV0IGNvbXBvbmVudDogRGlhbG9nQ2FyZ2FyTGljZW5jaWFNZWRpY2FDb21wb25lbnQ7XG4gIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPERpYWxvZ0NhcmdhckxpY2VuY2lhTWVkaWNhQ29tcG9uZW50PjtcblxuICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgZGVjbGFyYXRpb25zOiBbIERpYWxvZ0NhcmdhckxpY2VuY2lhTWVkaWNhQ29tcG9uZW50IF1cbiAgICB9KVxuICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuICB9KSk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KERpYWxvZ0NhcmdhckxpY2VuY2lhTWVkaWNhQ29tcG9uZW50KTtcbiAgICBjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZScsICgpID0+IHtcbiAgICBleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xufSk7XG4iXX0=