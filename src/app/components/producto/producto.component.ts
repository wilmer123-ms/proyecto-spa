import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: "app-producto",
  templateUrl: "./producto.component.html",
  styleUrls: ["./producto.component.scss"],
})
export class ProductoComponent implements OnInit {
  producto: any;
  constructor( private ativatedRoute : ActivatedRoute, private productosService : ProductosService, private router : Router) {
    this.producto = {};
  }

  ngOnInit(): void {
    this.ativatedRoute.params.subscribe( params => {
      this.producto = this.productosService.getProducto(params.idProducto)
      console.log(this.producto)
    });
  }
  regresar() {
    this.router.navigate(['home'])
  }
}
