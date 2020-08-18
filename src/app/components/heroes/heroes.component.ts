import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "src/app/servicios/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  public heroes: Heroe[];

  constructor(private heroesService: HeroesService, private router: Router) {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.listarHeroes();
  }
  listarHeroes() {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(item: number) {
    // console.log(item)
    this.router.navigate(["/heroe", item]);
  }
}
