"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var cargar_licencia_medica_component_1 = require("./cargar-licencia-medica.component");
describe('CargarLicenciaMedicaComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [cargar_licencia_medica_component_1.CargarLicenciaMedicaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(cargar_licencia_medica_component_1.CargarLicenciaMedicaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZ2FyLWxpY2VuY2lhLW1lZGljYS5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmdhci1saWNlbmNpYS1tZWRpY2EuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBeUU7QUFFekUsdUZBQW1GO0FBRW5GLFFBQVEsQ0FBQywrQkFBK0IsRUFBRTtJQUN4QyxJQUFJLFNBQXdDLENBQUM7SUFDN0MsSUFBSSxPQUF3RCxDQUFDO0lBRTdELFVBQVUsQ0FBQyxlQUFLLENBQUM7UUFDZixpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzdCLFlBQVksRUFBRSxDQUFFLGdFQUE2QixDQUFFO1NBQ2hELENBQUM7YUFDRCxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixVQUFVLENBQUM7UUFDVCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsZ0VBQTZCLENBQUMsQ0FBQztRQUNqRSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUU7UUFDbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3luYywgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IENhcmdhckxpY2VuY2lhTWVkaWNhQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJnYXItbGljZW5jaWEtbWVkaWNhLmNvbXBvbmVudCc7XG5cbmRlc2NyaWJlKCdDYXJnYXJMaWNlbmNpYU1lZGljYUNvbXBvbmVudCcsICgpID0+IHtcbiAgbGV0IGNvbXBvbmVudDogQ2FyZ2FyTGljZW5jaWFNZWRpY2FDb21wb25lbnQ7XG4gIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPENhcmdhckxpY2VuY2lhTWVkaWNhQ29tcG9uZW50PjtcblxuICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgZGVjbGFyYXRpb25zOiBbIENhcmdhckxpY2VuY2lhTWVkaWNhQ29tcG9uZW50IF1cbiAgICB9KVxuICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuICB9KSk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KENhcmdhckxpY2VuY2lhTWVkaWNhQ29tcG9uZW50KTtcbiAgICBjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZScsICgpID0+IHtcbiAgICBleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xufSk7XG4iXX0=