const productos = [
    { id:1, nombre: "Samsung A13", precio: 55000 , categoria: "Celular"},
    { id:2, nombre: "Motorola G5", precio: 80000 , categoria: "Celular"},
    { id:3, nombre: "Iphone 12", precio: 120000 , categoria: "Celular"},
    { id:4, nombre: "Samsung S21", precio: 150000 , categoria: "Celular"},
    { id:5, nombre: "Samsung 65 Pulgadas", precio: 230000 , categoria: "Televisor"},
    { id:6, nombre: "Lg 70 Pulgadas", precio: 250000 , categoria: "Televisor"},
    { id:7, nombre: "Noblex 42 pulgadas", precio: 120000 , categoria: "Televisor"},
    { id:8, nombre: "Samsung 75hz", precio: 80000 , categoria: "Monitor"},
    { id:9, nombre: "Lg 75hz", precio: 70000 , categoria: "Monitor"},
    { id:10, nombre: "Zowie 144hz", precio: 120000 , categoria: "Monitor"},
]


const renderizarProductos =(productosARenderizar) => {
    let listaDeProductos = ""
    for (let producto of productosARenderizar) {
        listaDeProductos +="\n" + producto.id +") " + producto.nombre
        
    }
    return listaDeProductos
}

const renderizarProducto = (producto) => {
    return "nombre del producto: " + producto.nombre + "\n precio del producto: " + producto.precio + "\n categoria del producto: " + producto.categoria 
}


console.log(
    productos.filter((producto) =>  producto.precio > 90000)
  );


  alert ("Hola ¿que tal? Bienvenido a la tienda !")

  let categoria = prompt ("Eliga una de las categorias:\n Celular \n Televisor \n Monitor ")

  let listaDeProductos= renderizarProductos(productos.filter((producto) => producto.categoria === categoria ))

  let idABuscar = prompt ("Productos disponibles: " + listaDeProductos + "\n Eliga el numero del producto a comprar: " )
  
  
alert (renderizarProducto (productos.find ((producto) => producto.id === parseInt (idABuscar)))) 