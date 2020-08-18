import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService } from "src/app/servicios/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.scss"],
})
export class HeroeComponent implements OnInit {
  public heroe: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router : Router,
  ) {
    this.heroe = {};
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params.id);
      this.heroe = this.heroesService.getHeroe(params.id);
        console.log(this.heroe);
    });
  }

  regresar() {
    this.router.navigate(['heroes'])
  }
}
