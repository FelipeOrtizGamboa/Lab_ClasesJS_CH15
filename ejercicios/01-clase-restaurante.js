// ============================================================
// Ejercicio 01 · Una clase: constructor y métodos
// ============================================================
// Antojo Ya, una app de domicilios, necesita representar cada
// restaurante de su catálogo como un objeto. Todos se crean con
// la misma plantilla: una clase.
//
// Completa la clase Restaurante:
//
//   constructor(nombre, categoria, calificacion)
//     → guarda los tres valores en this.nombre, this.categoria
//       y this.calificacion (un número, ej. 4.6)
//
//   describir()
//     → retorna este texto EXACTO (fíjate en los espacios):
//       "<nombre> - <categoria> (<calificacion> estrellas)"
//
//   estaBienCalificado()
//     → retorna true si la calificación es 4.5 o más,
//       y false si es menos de 4.5
//
// Ejemplos:
//   const brasa = new Restaurante("La Brasa Dorada", "Asados", 4.6);
//   brasa.describir()          → "La Brasa Dorada - Asados (4.6 estrellas)"
//   brasa.estaBienCalificado() → true
//
//   const wok = new Restaurante("Wok Express", "Comida china", 4.2);
//   wok.estaBienCalificado()   → false
//
// Pista: en estaBienCalificado() no necesitas un if.
//
// 💭 Para pensar (no se califica):
//   La comparación calificacion >= 4.5, por sí sola y sin if,
//   ¿qué valor tiene?
// ============================================================

class Restaurante {
  constructor(nombre, categoria, calificacion){
    this.nombre = nombre;
    this.categoria = categoria;
    this.calificacion = calificacion;
  }

  describir(){
    return `Nombre del restaurante: ${this.nombre} - Categoría del restautante: ${this.categoria} - (calificación del restaurante: ${this.calificacion} estrellas)`;
  }

  estaBienCalificado(){
    return this.calificacion >= 4.5;
  }
}

const restaurante1 = new Restaurante("La brasa dorada", "Asados", 4.6);

console.log(restaurante1);
console.log(restaurante1.describir());
console.log(restaurante1.estaBienCalificado());

// No borres esta línea: es la puerta por donde el test usa tu clase
module.exports = { Restaurante };
