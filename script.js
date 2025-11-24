// ---------------- EJERCICIO 3 ----------------
document.getElementById("btnCambiar3").addEventListener("click", () => {
  document.getElementById("parrafo3").textContent = "Texto cambiado";
});

// ---------------- EJERCICIO 4 ----------------
document.getElementById("btnToggle4").addEventListener("click", () => {
  const p = document.getElementById("parrafo4");
  p.textContent = p.textContent === "Texto original" ? "Texto cambiado" : "Texto original";
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
  mensaje6.textContent = "";
});

document.getElementById("btnMinus").addEventListener("click", () => {
  if (contador === 0) {
    mensaje6.textContent = "No puede ser menor que 0";
  } else {
    contador--;
    display.textContent = contador;
  }
});

// ---------------- EJERCICIO 7 ----------------
document.getElementById("btnAdd7").addEventListener("click", () => {
  const txt = document.getElementById("input7").value;
  if (txt !== "") {
    const li = document.createElement("li");
    li.textContent = txt;
    document.getElementById("lista7").appendChild(li);
  }
});

document.getElementById("btnDel7").addEventListener("click", () => {
  const lista = document.getElementById("lista7");
  if (lista.lastChild) lista.removeChild(lista.lastChild);
});

// ---------------- EJERCICIO 8 ----------------
document.getElementById("btnVal8").addEventListener("click", () => {
  const nombre = document.getElementById("nombre8").value;
  const correo = document.getElementById("correo8").value;
  const errores = document.getElementById("errores8");
  errores.innerHTML = "";

  if (nombre === "") {
    const s = document.createElement("span");
    s.textContent = "Nombre vacío.";
    s.className = "error";
    errores.appendChild(s);
  }

  if (correo === "") {
    const s = document.createElement("span");
    s.textContent = "Correo vacío.";
    s.className = "error";
    errores.appendChild(s);
  }
});

// ---------------- EJERCICIO 9 ----------------
const imagenes = [
  "https://picsum.photos/250?1",
  "https://picsum.photos/250?2",
  "https://picsum.photos/250?3"
];

imagenes.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.addEventListener("click", () => {
    document.getElementById("imagenGrande").innerHTML = `<img src="${src}" width="300">`;
  });
  document.getElementById("miniaturas9").appendChild(img);
});

// ---------------- EJERCICIO 10 ----------------
document.getElementById("btnTabla10").addEventListener("click", () => {
  const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 }
  ];

  let tabla = "<table><tr><th>Nombre</th><th>Precio</th></tr>";
  productos.forEach(p => {
    tabla += `<tr><td>${p.nombre}</td><td>${p.precio}</td></tr>`;
  });
  tabla += "</table>";

  document.getElementById("contenedorTabla10").innerHTML = tabla;
});

// ---------------- EJERCICIO 11 ----------------
document.getElementById("lista11").addEventListener("click", e => {
  if (e.target.tagName === "LI") e.target.remove();
});

// ---------------- EJERCICIO 12 ----------------
document.getElementById("btnMover12").addEventListener("click", () => {
  document.getElementById("cuadro12").classList.add("mover");
});

document.getElementById("btnReset12").addEventListener("click", () => {
  document.getElementById("cuadro12").classList.remove("mover");
});

// ---------------- EJERCICIO 13 ----------------
document.getElementById("btnAgregar13").addEventListener("click", () => {
  const nombre = document.getElementById("nombre13").value;
  const edad = document.getElementById("edad13").value;

  const fila = document.createElement("tr");
  fila.innerHTML = `
      <td>${nombre}</td>
      <td>${edad}</td>
      <td><button class="del13">Eliminar</button></td>
    `;
  document.getElementById("tabla13").appendChild(fila);
});

document.getElementById("tabla13").addEventListener("click", e => {
  if (e.target.classList.contains("del13")) e.target.parentNode.parentNode.remove();
});

// ---------------- EJERCICIO 14 ----------------
document.getElementById("btn14").addEventListener("click", () => {
  const persona = { nombre: "Ana", edad: 25, ciudad: "Lima" };
  console.log(JSON.stringify(persona));
});

// ---------------- EJERCICIO 15 ----------------
document.getElementById("btn15").addEventListener("click", () => {
  const jsonCad = `{"nombre":"Carlos","edad":28}`;
  const obj = JSON.parse(jsonCad);
  document.getElementById("mostrar15").textContent = obj.nombre;
});

// ---------------- EJERCICIO 16 ----------------
document.getElementById("btn16").addEventListener("click", () => {
  const productos = [
    { nombre: "Teclado", precio: 120 },
    { nombre: "Monitor", precio: 900 }
  ];

  const json = JSON.stringify(productos);
  const arr = JSON.parse(json);
  const ul = document.getElementById("lista16");
  ul.innerHTML = "";
  arr.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.nombre;
    ul.appendChild(li);
  });
});

// ---------------- EJERCICIO 17 ----------------
document.getElementById("btn17").addEventListener("click", () => {
  const usuario = { nombre: "Luis", correo: "luis@gmail.com", rol: "admin" };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  const data = JSON.parse(localStorage.getItem("usuario"));
  document.getElementById("mostrar17").textContent = `Usuario guardado: ${data.nombre}`;
});

// ---------------- EJERCICIO 18 ----------------
document.getElementById("btn18").addEventListener("click", () => {
  const librosJSON = `
    [
      {"titulo":"El Quijote","autor":"Cervantes"},
      {"titulo":"1984","autor":"Orwell"}
    ]
  `;
  const libros = JSON.parse(librosJSON);

  let tabla = "<table><tr><th>Título</th><th>Autor</th></tr>";
  libros.forEach(l => {
    tabla += `<tr><td>${l.titulo}</td><td>${l.autor}</td></tr>`;
  });
  tabla += "</table>";

  document.getElementById("tabla18").innerHTML = tabla;
});

// ---------------- EJERCICIO 19 ----------------
document.getElementById("btn19").addEventListener("click", () => {

  const jsonOriginal = `{"nombre":"Pedro","edad":20}`;
  let persona = JSON.parse(jsonOriginal);
  persona.edad = 30;

  const jsonActualizado = JSON.stringify(persona, null, 2);

  // Mostrar en pantalla
  document.getElementById("salida19").textContent = jsonActualizado;

  console.log("JSON actualizado:", jsonActualizado);
});


// ---------------- EJERCICIO 20 ----------------
document.getElementById("btn20").addEventListener("click", () => {
  const nombre = document.getElementById("input20").value.trim();

  if (nombre === "") {
    console.warn("El nombre está vacío");
    alert("Por favor, escribe un nombre.");
    return;
  }

  // Guardar objeto
  const obj = { nombre: nombre };

  // Convertir a JSON
  const json = JSON.stringify(obj);

  console.log("JSON guardado:", json);
  alert("Nombre guardado como JSON (ver consola)");
});

// ---------------- EJERCICIO 21 ----------------
document.getElementById("btn21").addEventListener("click", () => {
  const jsonTareas = `
    [
      { "titulo": "Comprar pan",   "completada": true },
      { "titulo": "Hacer tarea",   "completada": false },
      { "titulo": "Leer 20 minutos", "completada": true }
    ]
  `;

  const tareas = JSON.parse(jsonTareas);
  const ul = document.getElementById("lista21");
  ul.innerHTML = "";

  tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea.titulo;

    if (tarea.completada) {
      li.style.color = "green";
      li.style.fontWeight = "bold";
    } else {
      li.style.color = "red";
    }

    ul.appendChild(li);
  });
});

// ---------------- EJERCICIO 22 ----------------
// Guardar perfil
document.getElementById("form22").addEventListener("submit", (e) => {
  e.preventDefault();

  const perfil = {
    nombre: document.getElementById("nombre22").value.trim(),
    edad: document.getElementById("edad22").value.trim(),
    pais: document.getElementById("pais22").value.trim()
  };

  localStorage.setItem("perfilUsuario", JSON.stringify(perfil));

  document.getElementById("perfil22").textContent =
    `${perfil.nombre}, ${perfil.edad} años, ${perfil.pais}`;
});

// Mostrar perfil al recargar
window.addEventListener("load", () => {
  const data = localStorage.getItem("perfilUsuario");

  if (data) {
    const perfil = JSON.parse(data);
    document.getElementById("perfil22").textContent =
      `${perfil.nombre}, ${perfil.edad} años, ${perfil.pais}`;
  }
});
