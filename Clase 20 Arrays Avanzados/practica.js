let electronicos = [
  { nombre: 'iPad Pro 12"', precioEnUsd: 2200, cantVendidos: 15 },
  { nombre: "Macbook Air", precioEnUsd: 1500, cantVendidos: 20 },
  { nombre: "Macbook Pro", precioEnUsd: 3000, cantVendidos: 7 },
  { nombre: "iPhone X", precioEnUsd: 650, cantVendidos: 150 },
  { nombre: "iPhone 12", precioEnUsd: 1200, cantVendidos: 100 },
];

const tiendaElectronica = {
  productos: electronicos,
  gananciaTotal: function (productos) {
    const precioPorProducto = productos.map(
      (productos) => productos.precioEnUsd * productos.cantVendidos
    );
    const sumaPrecioPorProducto = precioPorProducto.reduce(
      (acumulador, precioPorProducto) => acumulador + precioPorProducto
    );
    return sumaPrecioPorProducto;
  },
  filtrarPorVendidos: function (cantidadMinima) {
    const filtro = this.productos.filter(
      (cualquierNombre) => cualquierNombre.cantVendidos >= cantidadMinima
    );
    return filtro;
  },
  aumentarPrecio: function (porcentajeAumento) {
    const preciosConAumento = this.productos.forEach((precios) =>
      console.log(
        "El nuevo precio es $" +
          (precios.precioEnUsd * (porcentajeAumento / 100) +
            precios.precioEnUsd)
      )
    );
  },
};

const laGananciaTotalFue =
  "La ganancia total fue $" +
  tiendaElectronica.gananciaTotal(electronicos) +
  " USD";
console.log(laGananciaTotalFue);

const aplicarFiltro = tiendaElectronica.filtrarPorVendidos(100);
console.table(aplicarFiltro);

preciosAjustados = tiendaElectronica.aumentarPrecio(10);
preciosAjustados;
