const Animal = new Object({
    ver_animal() {
        return `Animal: ${this.getnombre}, Especie: ${this.getespecie}, color: ${this.getcolor}, Raza: ${this.getraza}`;
    }
});
const obj_animal = Animal.__proto__;
obj_animal.constructor ={raza: "schnauzer", especie: "Perro", color:"Sal pimienta", nombre: "Cherry"};
Animal.__defineSetter__('setnombre', 
    function(p1) {
        obj_animal.constructor.nombre = p1;
    }
)
Animal.__defineSetter__('setraza', 
    function(p2) {
        obj_animal.constructor.raza =p2;
    }
)
Animal.__defineSetter__('setespecie', 
    function(p3) {
        obj_animal.constructor.especie = p3;
    }
)
Animal.__defineSetter__('setcolor', 
    function(p4) {
        obj_animal.constructor.color =p4;
    }
)


Animal.__defineGetter__('getnombre',
    function() {
        return obj_animal.constructor.nombre;
        
    }
)
Animal.__defineGetter__('getraza',
    function() {
        return obj_animal.constructor.raza;
    }
)
Animal.__defineGetter__('getespecie',
    function() {
        return obj_animal.constructor.especie;
    }
)
Animal.__defineGetter__('getcolor',
    function() {
        return obj_animal.constructor.color;
    }
)

console.warn(`Ejercicio objetos`);

console.log(Animal.ver_animal());
Animal.setnombre = "Lucas Antonio";
Animal.setraza = "Pastor Alemán";
Animal.setespecie = "Perrito";
Animal.setcolor = "Beige";

console.log(Animal.ver_animal());

//console.log(`Mi ${obj_animal.constructor.especie} se llama ${obj_animal.constructor.nombre} y es un ${obj_animal.constructor.raza} de color ${obj_animal.constructor.color}`);



//console.log(Animal.ver_animal());

// const Humanos = new Object({
//     Saludar(){
//         return "Hola Humanos";
//     }
// });
// const obj = Humanos.__proto__;
// obj.constructor = {nombre: "Miguel", apellido: "Castro"};

// Humanos.__defineSetter__( 'setnombre',
//     function(p1){
//         obj.constructor.nombre = p1;
//     }
// )
// Humanos.__defineGetter__('getnombre',
//     function(){
//         return obj.constructor.nombre;
//     }
// )
// Humanos.setnombre = "Diana";

// console.log(`Objetos`);
// console.log(Humanos);
