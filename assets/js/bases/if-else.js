let a = 5;

if (a >= 10) {
  console.log("A es mayor o igual a 10");
} else {
  console.log("A es menor a 10");
}

// console.log("Fin del programa");

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes...

console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");

  //   if (dia === 1) {
  //     console.log("Lunes");
  //   } else {
  //     console.log("No es lunes ni domingo");
  //   }
} else if (dia === 2) {
  console.log("Martes");
} else {
  console.log("No es lunes, martes o domingo");
}

// Sin usar if else, o switch, únicamente objetos
dia = 3;

const diasLetras = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miércoles",
  4: "jueves",
  5: "viernes",
  6: "sábado",
};

// console.log(diasLetras[dia] || "Día no definido");

const diasLetra2 = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

console.log(diasLetra2[dia]);
