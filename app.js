class Item {
    constructor(nombre, precio, imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
    }
  }
  
  const carrito = [];

  const docena = new Item("Agregar una docena", 2100, "docena.png");
  const empanada = new Item("Agregar una empanada", 200, "empanada.png");
  const gaseosa = new Item("Agregar una gaseosa", 300, "gaseosa.png");
  const cerveza = new Item("Agregar una cerveza", 400, "cerveza.png");
  
  const itemsVendedor = [docena, empanada, gaseosa, cerveza];
  
  let costo = 0;
  
  const costoTotal = document.querySelector("#costo span");
  const elementoCarrito = document.querySelector("#carrito");
  costoTotal.innerText = costo;
  
  const botones = document.querySelectorAll(".boton");
  
  for (const boton of botones) {
    boton.addEventListener("click", function (event) {
      let item = itemsVendedor.find((item) => item.nombre == boton.innerText);
      comprar(item);
    });
  }
  
  function comprar(item) {
      carrito.push(item);
      costo = costo + item.precio; 
      actualizarHTML(); 
  }
  
  function devolver(indice) {
    const item = carrito[indice];
    costo = costo - item.precio;
    carrito.splice(indice, 1);
    actualizarHTML(); 
  }
  
  function actualizarHTML() {
    elementoCarrito.innerHTML = "";
    for (const item of carrito) {
      let indiceItem = carrito.indexOf(item);
      let elementoItem = `
          <li class="item" onclick="devolver(${indiceItem})">
              <img src="img/${item.imagen}" />
          </li>`;
      elementoCarrito.innerHTML += elementoItem;
    }
    costoTotal.innerText = costo;
  }