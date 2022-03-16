let electronicos = [
    { nombre: 'iPad Pro 12"', precioEnUsd: 2200, cantVendidos: 15 },
    { nombre: "Macbook Air", precioEnUsd: 1500, cantVendidos: 20 },
    { nombre: "Macbook Pro", precioEnUsd: 3000, cantVendidos: 7 },
    { nombre: "iPhone X", precioEnUsd: 650, cantVendidos: 150 },
    { nombre: "iPhone 12", precioEnUsd: 1200, cantVendidos: 100 },
  ];

  const tiendaElectronica = {
    productos: electronicos,
    gananciaTotal: function(productos){
        const gananciaPorProducto = productos.map( producto => producto.precioEnUsd * producto.cantVendidos);
        const sumaGanancia = gananciaPorProducto.reduce((acum, elemento) => acum + elemento);
        return sumaGanancia;
    },
    filtrarPorVendidos: function(productos, numero ){
        return productos.filter((producto) => producto.cantVendidos > numero) 
    },
    aumentarPrecio: function(porcentajeAumento) {
        // Escribí tu codigo aca
    }
}
console.log("--------- primer punto ------");
const gananciaTotal = tiendaElectronica.gananciaTotal(tiendaElectronica.productos)
console.log(gananciaTotal);
console.log("--------- segundo punto ------");
const filtrado = tiendaElectronica.filtrarPorVendidos(tiendaElectronica.productos, 50)
console.log(filtrado);
