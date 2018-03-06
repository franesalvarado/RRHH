"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_sidebar_1 = require("./mock-sidebar/mock-sidebar");
var SidenavService = (function () {
    function SidenavService() {
    }
    SidenavService.prototype.getSidenavDirector = function () {
        return mock_sidebar_1.SIDENAVDIRECTOR;
    };
    SidenavService.prototype.getSidenavAdminGlobal = function () {
        return mock_sidebar_1.SIDENAVADMINGLOBAL;
    };
    SidenavService.prototype.getSidenavAdmin = function () {
        return mock_sidebar_1.SIDENAVADMIN;
    };
    SidenavService.prototype.getSidenavRRHHGLOBAL = function () {
        return mock_sidebar_1.SIDENAVRRHHGLOBAL;
    };
    SidenavService = __decorate([
        core_1.Injectable()
    ], SidenavService);
    return SidenavService;
}());
exports.SidenavService = SidenavService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZGViYXIuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsNERBQW1IO0FBR25IO0lBQUE7SUFnQkEsQ0FBQztJQWZHLDJDQUFrQixHQUFsQjtRQUNJLE1BQU0sQ0FBQyw4QkFBZSxDQUFDO0lBQzNCLENBQUM7SUFFRCw4Q0FBcUIsR0FBckI7UUFDSSxNQUFNLENBQUMsaUNBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDSSxNQUFNLENBQUMsMkJBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsNkNBQW9CLEdBQXBCO1FBQ0ksTUFBTSxDQUFDLGdDQUFpQixDQUFDO0lBQzdCLENBQUM7SUFmUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBZ0IxQjtJQUFELHFCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNJREVOQVZESVJFQ1RPUiwgU0lERU5BVkFETUlOR0xPQkFMLCBTSURFTkFWQURNSU4sIFNJREVOQVZSUkhIR0xPQkFMIH0gZnJvbSAnLi9tb2NrLXNpZGViYXIvbW9jay1zaWRlYmFyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZGVuYXZTZXJ2aWNlIHtcclxuICAgIGdldFNpZGVuYXZEaXJlY3RvcigpIHtcclxuICAgICAgICByZXR1cm4gU0lERU5BVkRJUkVDVE9SO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNpZGVuYXZBZG1pbkdsb2JhbCgpe1xyXG4gICAgICAgIHJldHVybiBTSURFTkFWQURNSU5HTE9CQUw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2lkZW5hdkFkbWluKCl7XHJcbiAgICAgICAgcmV0dXJuIFNJREVOQVZBRE1JTjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaWRlbmF2UlJISEdMT0JBTCgpe1xyXG4gICAgICAgIHJldHVybiBTSURFTkFWUlJISEdMT0JBTDtcclxuICAgIH1cclxufSJdfQ==