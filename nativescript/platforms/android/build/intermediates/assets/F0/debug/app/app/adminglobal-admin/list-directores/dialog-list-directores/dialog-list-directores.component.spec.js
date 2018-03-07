"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var dialog_list_directores_component_1 = require("./dialog-list-directores.component");
describe('DialogListDirectoresComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dialog_list_directores_component_1.DialogListDirectoresComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dialog_list_directores_component_1.DialogListDirectoresComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWxpc3QtZGlyZWN0b3Jlcy5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpYWxvZy1saXN0LWRpcmVjdG9yZXMuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBeUU7QUFFekUsdUZBQW1GO0FBRW5GLFFBQVEsQ0FBQywrQkFBK0IsRUFBRTtJQUN4QyxJQUFJLFNBQXdDLENBQUM7SUFDN0MsSUFBSSxPQUF3RCxDQUFDO0lBRTdELFVBQVUsQ0FBQyxlQUFLLENBQUM7UUFDZixpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzdCLFlBQVksRUFBRSxDQUFFLGdFQUE2QixDQUFFO1NBQ2hELENBQUM7YUFDRCxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixVQUFVLENBQUM7UUFDVCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsZ0VBQTZCLENBQUMsQ0FBQztRQUNqRSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUU7UUFDbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3luYywgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IERpYWxvZ0xpc3REaXJlY3RvcmVzQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctbGlzdC1kaXJlY3RvcmVzLmNvbXBvbmVudCc7XG5cbmRlc2NyaWJlKCdEaWFsb2dMaXN0RGlyZWN0b3Jlc0NvbXBvbmVudCcsICgpID0+IHtcbiAgbGV0IGNvbXBvbmVudDogRGlhbG9nTGlzdERpcmVjdG9yZXNDb21wb25lbnQ7XG4gIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPERpYWxvZ0xpc3REaXJlY3RvcmVzQ29tcG9uZW50PjtcblxuICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgZGVjbGFyYXRpb25zOiBbIERpYWxvZ0xpc3REaXJlY3RvcmVzQ29tcG9uZW50IF1cbiAgICB9KVxuICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuICB9KSk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KERpYWxvZ0xpc3REaXJlY3RvcmVzQ29tcG9uZW50KTtcbiAgICBjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZScsICgpID0+IHtcbiAgICBleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xufSk7XG4iXX0=