"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var datatable_1 = require("primeng/datatable");
var NgPrimeModule = (function () {
    function NgPrimeModule() {
    }
    NgPrimeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                datatable_1.DataTableModule
            ],
            exports: [
                common_1.CommonModule,
                datatable_1.DataTableModule
            ]
        })
    ], NgPrimeModule);
    return NgPrimeModule;
}());
exports.NgPrimeModule = NgPrimeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdwcmltZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZ3ByaW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsK0NBQW9EO0FBZ0JwRDtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQVh6QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVk7Z0JBQ1osMkJBQWU7YUFFaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AscUJBQVk7Z0JBQ1osMkJBQWU7YUFDaEI7U0FDRixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERhdGFUYWJsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZGF0YXRhYmxlJztcclxuXHJcbi8vIE5nUHJpbWUgXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBEYXRhVGFibGVNb2R1bGVcclxuXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBEYXRhVGFibGVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1ByaW1lTW9kdWxlIHsgfVxyXG4iXX0=