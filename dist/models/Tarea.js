"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dificultad = exports.Estado = void 0;
var Estado;
(function (Estado) {
    Estado["pendiente"] = "pendiente";
    Estado["enCurso"] = "en curso";
    Estado["terminada"] = "terminada";
    Estado["cancelada"] = "cancelada";
})(Estado || (exports.Estado = Estado = {}));
var Dificultad;
(function (Dificultad) {
    Dificultad[Dificultad["Facil"] = 1] = "Facil";
    Dificultad[Dificultad["Medio"] = 2] = "Medio";
    Dificultad[Dificultad["Dificil"] = 3] = "Dificil";
})(Dificultad || (exports.Dificultad = Dificultad = {}));
