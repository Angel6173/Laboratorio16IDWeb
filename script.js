/*  
   Laboratorio 16 - Ejercicios 3 al 6
   Colaboré con: ChatGPT
*/

// ---------------- EJERCICIO 3 ----------------
document.getElementById("btnCambiar3").addEventListener("click", () => {
  document.getElementById("parrafo3").textContent = "Texto cambiado";
});

// ---------------- EJERCICIO 4 ----------------
document.getElementById("btnToggle4").addEventListener("click", () => {
  const p = document.getElementById("parrafo4");
  p.textContent = p.textContent === "Texto original"
    ? "Texto cambiado"
    : "Texto original";
});

// ---------------- EJERCICIO 5 ----------------
document.getElementById("btnOscuro").addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});

// ---------------- EJERCICIO 6 ----------------
let contador = 0;
const display = document.getElementById("display");
const mensaje6 = document.getElementById("mensaje6");

document.getElementById("btnPlus").addEventListener("click", () => {
  contador++;
  display.textContent = contador;
  mensaje6.style.display = "none";
});

document.getElementById("btnMinus").addEventListener("click", () => {
  if (contador === 0) {
    mensaje6.textContent = "No puede ser menor que 0";
    mensaje6.style.display = "block";
  } else {
    contador--;
    display.textContent = contador;
  }
});
