var animal = /** @class */ (function () {
    function animal(especieParam, edadParam, generoParam, colorParam) {
        this.especie = especieParam;
        this.edad = edadParam;
        this.genero = generoParam;
        this.color = colorParam;
    }
    animal.prototype.comer = function () {
        return "estoy comiendo";
    };
    return animal;
}());
var animalito = new animal("perro", 5, "macho", "marron");
console.log(animalito.especie);
console.log(animalito.edad);
