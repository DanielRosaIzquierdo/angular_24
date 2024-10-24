import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public ultimoHeroeBorrado?: string;
  public heroeNames: string[] =
    ['Spiderman', 'Ironman', 'Hulk', 'Martosman', 'Thor'];

  borrarUltimoHeroe(): void {
    this.ultimoHeroeBorrado = this.heroeNames.pop()!;
  }
}
