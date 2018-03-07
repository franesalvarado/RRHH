"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var list_administradores_component_1 = require("./list-administradores.component");
describe('ListAdministradoresComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [list_administradores_component_1.ListAdministradoresComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(list_administradores_component_1.ListAdministradoresComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1hZG1pbmlzdHJhZG9yZXMuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LWFkbWluaXN0cmFkb3Jlcy5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUF5RTtBQUV6RSxtRkFBZ0Y7QUFFaEYsUUFBUSxDQUFDLDhCQUE4QixFQUFFO0lBQ3ZDLElBQUksU0FBdUMsQ0FBQztJQUM1QyxJQUFJLE9BQXVELENBQUM7SUFFNUQsVUFBVSxDQUFDLGVBQUssQ0FBQztRQUNmLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsWUFBWSxFQUFFLENBQUUsNkRBQTRCLENBQUU7U0FDL0MsQ0FBQzthQUNELGlCQUFpQixFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLFVBQVUsQ0FBQztRQUNULE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw2REFBNEIsQ0FBQyxDQUFDO1FBQ2hFLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdEMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUNsQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzeW5jLCBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgTGlzdEFkbWluaXN0cmFkb3Jlc0NvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1hZG1pbmlzdHJhZG9yZXMuY29tcG9uZW50JztcblxuZGVzY3JpYmUoJ0xpc3RBZG1pbmlzdHJhZG9yZXNDb21wb25lbnQnLCAoKSA9PiB7XG4gIGxldCBjb21wb25lbnQ6IExpc3RBZG1pbmlzdHJhZG9yZXNDb21wb25lbnQ7XG4gIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPExpc3RBZG1pbmlzdHJhZG9yZXNDb21wb25lbnQ+O1xuXG4gIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xuICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBkZWNsYXJhdGlvbnM6IFsgTGlzdEFkbWluaXN0cmFkb3Jlc0NvbXBvbmVudCBdXG4gICAgfSlcbiAgICAuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgfSkpO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChMaXN0QWRtaW5pc3RyYWRvcmVzQ29tcG9uZW50KTtcbiAgICBjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZScsICgpID0+IHtcbiAgICBleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xufSk7XG4iXX0=