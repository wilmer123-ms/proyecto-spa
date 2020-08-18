import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'publicidad', component: PublicidadComponent},
  {path: 'about', component: AboutComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'buscar/:termino', component: BuscadorComponent},
  {path: 'producto/:idProducto', component: ProductoComponent},
  {path: '' , pathMatch: 'full', redirectTo: 'home'},
  {path: '**' , pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
