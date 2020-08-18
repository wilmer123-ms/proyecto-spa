import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductosService } from "src/app/servicios/productos.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public productos: Array<any>;
  public producto: Array<{
    precio: number;
    nombre: string;
    provincia: string;
    id: number;
  }>;
  public precio: number;
  public nombre: string;
  public provincia: string;
  public id: number;
  public selectItem: any;

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {
    this.productos = [];
    this.producto = [];
    this.selectItem = {};
    // console.log(this.productos);
  }

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
    console.log(this.productos)

    this.producto.push({
      precio: 20,
      nombre: "papa",
      provincia: "huaral",
      id: 6,
    });
    this.producto.push({
      precio: 30,
      nombre: "arroz",
      provincia: "barranca",
      id: 7,
    });
    this.producto.push({
      precio: 30,
      nombre: "arina",
      provincia: "huaral",
      id: 7,
    });
    // el metodo fin se evalua como true o falso, se evalua la especificacion establecida y si es true se lista el primer elemento que encuentre.
    const newArina = this.productos.find((item) => {
      return item.nombre === "arina";
    });
    // console.log(newArina)
    let precios = [];
    this.productos.forEach((item) => {
      precios.push({ precio: item.precio, id: item.id });
    });
    // console.log(precios);

    // este metodo genera un nuevo objeto a raiz del array patron, y se puede modificar los objetos internos.
    const newPrecio = this.productos.map((item) => {
      return { precio: item.precio * 10, nombre: item.nombre + " " + "nuevo" };
    });
    // console.log(newPrecio);

    const impuestoPrecio = this.productos.map((item) => {
      let nuevoPrecio = item.precio + item.precio * 0.21;
      return { ...item, precio: nuevoPrecio };
    });
    // console.log(impuestoPrecio);

    // metodo que recupera nuevo array con las especificaciones que nostros le digamos. recorre el array
    // y los que encuntro como true los mete al nuevo array.
    const provinciasHuaral = this.productos.filter((item) => {
      return item.provincia === "huaral";
    });
    // console.log(provinciasHuaral)

    // este metodo nos devuelve true o false dependiendo si cumple o no las especificaciones que le demos.
    const check = this.productos.some((item) => {
      return item.precio >= 50;
    });
    // console.log(check)

    // este metodo nos devuelve true o false, solo analiza el precio menor y el precio maximo, no entra en medio de ese rango.
    const alguno = this.productos.every((item) => {
      return item.precio >= 3;
    });
    // console.log(alguno)

    // este metodo hace la suma de todo el item precio que se encuentre dentro de un array.
    const sumaTotalPrecio = this.productos.reduce((suma, item) => {
      return suma + item.precio;
    }, 0);
    // console.log(sumaTotalPrecio)
  }
  agregarProducto() {
    this.producto.push({
      precio: this.precio,
      nombre: this.nombre,
      provincia: this.provincia,
      id: this.id,
    });

    this.precio = null;
    this.nombre = "";
    this.provincia = "";
    this.id = null;

    console.log(this.producto);
  }
  eliminar(item) {
    this.producto.splice(item, 1);
  }
  fnSelectItem(item) {
    this.selectItem = item;
    // console.log(item);
  }
  verCompras() {
    this.router.navigate(["/producto", this.selectItem.id]);
    // console.log(this.selectItem.id);
  }
}
