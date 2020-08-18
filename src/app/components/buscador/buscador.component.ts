import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  public heroes: any[];

  constructor( private activatedRoute : ActivatedRoute, private heroesService : HeroesService, private router : Router) { 
    this.heroes = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.buscarHeroes(params.termino)
      console.log(this.heroes)
    })
  }
  // verHeroe(item: number) {
  //   // console.log(item)
  //   this.router.navigate(["/heroe", item]);
  // }

}
