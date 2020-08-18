import { Injectable } from "@angular/core";

@Injectable()
export class ProductosService {
  private productos: Array<any> = [
    {
      nombre: "papa",
      precio: 15,
      provincia: "huaura",
      id: 1,
      lugar: " lima",
      cantidad: 40,
      camion: "ssoj",
      placa: "HUT-325",
    },
    { nombre: "arroz", precio: 100, provincia: "huaral", id: 2 },
    { nombre: "arina", precio: 40, provincia: "barranca", id: 3 },
    { nombre: "azucar", precio: 10, provincia: "cañete", id: 4 },
    { nombre: "papa", precio: 15, provincia: "huaura", id: 5 },
    { nombre: "arroz", precio: 100, provincia: "huaral", id: 6 },
    { nombre: "arina", precio: 40, provincia: "barranca", id: 7 },
    { nombre: "azucar", precio: 10, provincia: "cañete", id: 8 },
  ];

  private compras: Array<any> = [
    {
      nombre: "papa",
      lugar: "Lima",
      cantidad: "100kg",
      chofer: "Luis",
      unidad: "Camion Remolque",
      placa: "HGT-124",
      destino: "Huacho",
      Licencia: "145263",
      id: 1,
    },
    {
      nombre: "arroz",
      lugar: "Lima",
      cantidad: "100kg",
      chofer: "Pepe",
      unidad: "Camion Remolque",
      placa: "HGT-124",
      destino: "Huacho",
      Licencia: "145263",
      id: 2,
    },
    {
      nombre: "arina",
      lugar: "Lima",
      cantidad: "100kg",
      chofer: "Juan Carlos",
      unidad: "Camion Remolque",
      placa: "HGT-124",
      destino: "Barranca",
      Licencia: "145263",
      id: 3,
    },
    {
      nombre: "azucar",
      lugar: "Lima",
      cantidad: "100kg",
      chofer: "Lauro torres",
      unidad: "Camion Remolque",
      placa: "HGT-124",
      destino: "Lima",
      Licencia: "145263",
      id: 4,
    },
    {
      nombre: "papa",
      lugar: "Lima",
      cantidad: "100kg",
      chofer: "Noe Felipe",
      unidad: "Camion Remolque",
      placa: "HGT-124",
      destino: "Paramonga",
      Licencia: "145263",
      id: 5,
    },
    {
      nombre: "arrooz",
      lugar: "Lima",
      cantidad: "100kg",
      chofer: "Lorgio Alonso",
      unidad: "Camion Remolque",
      placa: "HGT-124",
      destino: "Huaral",
      Licencia: "145263",
      id: 6,
    },
    {
      nombre: "arina",
      lugar: "Lima",
      cantidad: "100kg",
      chofer: "Loro peres",
      unidad: "Camion Remolque",
      placa: "HGT-124",
      destino: "Huacho",
      Licencia: "145263",
      id: 7,
    },
    {
      nombre: "azucar",
      lugar: "Lima",
      cantidad: "100kg",
      chofer: "Marco Aldair",
      unidad: "Camion Remolque",
      placa: "HGT-124",
      destino: "Barranca",
      Licencia: "145263",
      id: 8,
    },
  ];

  constructor() {}
  getProductos() {
    return this.productos;
  }

  getProducto(id) {
    const pro = this.compras.find((item) => {
      return item.id == id;
    });

    return pro;
  }
}
