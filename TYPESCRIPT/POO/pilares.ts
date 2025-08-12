

class animal {
    public especie: string;
    private edad: number;
    genero: string;
    color: string;

    constructor(especieParam: string, edadParam: number, generoParam: string, colorParam: string) {
        this.especie = especieParam;
        this.edad = edadParam;
        this.genero = generoParam;
        this.color = colorParam;
    }

    comer(): string {
        return "estoy comiendo";
    }

    getEdad():Number{
        return this.edad;
    }

    setEdad(edadParam:number){
        this.edad = edadParam;
    }

    aumentarEdad(){
        this.edad += 1;
    }
}

class perro extends animal{
    private raza : string;
    private nombre : string;

    constructor(especieParam: string, edadParam: number, generoParam: string, colorParam: string, razaParam: string , nombreParam: string ) {
        super(especieParam, edadParam, generoParam, colorParam)
        this.raza = razaParam;
        this.nombre = nombreParam;
    }

    ladrar(): string {
        return "guau guau";
    }
}

const perrito = new perro( "perro", 3, "macho", "blanco", "labrador", "Rex");

const animalito = new animal("perro", 5, "macho", "marron");

console.log(animalito.especie);
