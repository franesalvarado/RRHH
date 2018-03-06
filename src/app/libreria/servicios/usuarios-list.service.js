"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_usuarios_1 = require("./mock-usuarios/mock-usuarios");
var UsuarioListService = (function () {
    function UsuarioListService() {
    }
    UsuarioListService.prototype.getDirectores = function () {
        return mock_usuarios_1.DIRECTORES;
    };
    UsuarioListService.prototype.getUsuariosAdmin = function () {
        return mock_usuarios_1.USUARIOSADMIN;
    };
    UsuarioListService.prototype.getUsuariosAdminGlobal = function () {
        return mock_usuarios_1.USUARIOSADMINGLOBAL;
    };
    UsuarioListService.prototype.getPersonalRRHH = function () {
        return mock_usuarios_1.PERSONALRRHH;
    };
    UsuarioListService = __decorate([
        core_1.Injectable()
    ], UsuarioListService);
    return UsuarioListService;
}());
exports.UsuarioListService = UsuarioListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpb3MtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXN1YXJpb3MtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLCtEQUE2RztBQUU3RztJQUFBO0lBYUEsQ0FBQztJQVpHLDBDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsMEJBQVUsQ0FBQztJQUN0QixDQUFDO0lBQ0QsNkNBQWdCLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLDZCQUFhLENBQUM7SUFDekIsQ0FBQztJQUNELG1EQUFzQixHQUF0QjtRQUNJLE1BQU0sQ0FBQyxtQ0FBbUIsQ0FBQztJQUMvQixDQUFDO0lBQ0QsNENBQWUsR0FBZjtRQUNJLE1BQU0sQ0FBQyw0QkFBWSxDQUFDO0lBQ3hCLENBQUM7SUFaUSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTtPQUNBLGtCQUFrQixDQWE5QjtJQUFELHlCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBESVJFQ1RPUkVTLCBVU1VBUklPU0FETUlOLCBVU1VBUklPU0FETUlOR0xPQkFMLCBQRVJTT05BTFJSSEggfSBmcm9tICcuL21vY2stdXN1YXJpb3MvbW9jay11c3Vhcmlvcyc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzdWFyaW9MaXN0U2VydmljZSB7XHJcbiAgICBnZXREaXJlY3RvcmVzKCkge1xyXG4gICAgICAgIHJldHVybiBESVJFQ1RPUkVTO1xyXG4gICAgfVxyXG4gICAgZ2V0VXN1YXJpb3NBZG1pbigpIHtcclxuICAgICAgICByZXR1cm4gVVNVQVJJT1NBRE1JTjtcclxuICAgIH1cclxuICAgIGdldFVzdWFyaW9zQWRtaW5HbG9iYWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIFVTVUFSSU9TQURNSU5HTE9CQUw7XHJcbiAgICB9XHJcbiAgICBnZXRQZXJzb25hbFJSSEgoKSB7XHJcbiAgICAgICAgcmV0dXJuIFBFUlNPTkFMUlJISDtcclxuICAgIH1cclxufVxyXG4iXX0=