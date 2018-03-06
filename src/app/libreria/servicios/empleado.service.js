"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_empleado_1 = require("./mock-empleado/mock-empleado");
var EmpleadoService = (function () {
    function EmpleadoService() {
    }
    EmpleadoService.prototype.getEmpleados = function () {
        return mock_empleado_1.EMPLEADOS;
    };
    EmpleadoService.prototype.getEmpleadosFaltas = function () {
        return mock_empleado_1.EMPLEADOSFALTAS;
    };
    EmpleadoService = __decorate([
        core_1.Injectable()
    ], EmpleadoService);
    return EmpleadoService;
}());
exports.EmpleadoService = EmpleadoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbGVhZG8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVtcGxlYWRvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFFM0MsK0RBQTBFO0FBRzFFO0lBQUE7SUFRQSxDQUFDO0lBUEcsc0NBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyx5QkFBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEI7UUFDSSxNQUFNLENBQUMsK0JBQWUsQ0FBQztJQUMzQixDQUFDO0lBUFEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO09BQ0EsZUFBZSxDQVEzQjtJQUFELHNCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVtcGxlYWRvLCBFbXBsZWFkb0ZhbHRhcyB9IGZyb20gJy4uL21vZGVscy9lbXBsZWFkb3MnO1xyXG5pbXBvcnQgeyBFTVBMRUFET1MsIEVNUExFQURPU0ZBTFRBUyB9IGZyb20gJy4vbW9jay1lbXBsZWFkby9tb2NrLWVtcGxlYWRvJ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW1wbGVhZG9TZXJ2aWNlIHtcclxuICAgIGdldEVtcGxlYWRvcygpOiBFbXBsZWFkb1tdIHtcclxuICAgICAgICByZXR1cm4gRU1QTEVBRE9TO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcGxlYWRvc0ZhbHRhcygpOiBFbXBsZWFkb0ZhbHRhc1tdIHtcclxuICAgICAgICByZXR1cm4gRU1QTEVBRE9TRkFMVEFTO1xyXG4gICAgfVxyXG59Il19