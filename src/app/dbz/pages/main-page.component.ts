import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(private DbzService: DbzService) { }

    get characters():Character[]{
        return [...this.DbzService.characters];
    }

    onDeleteCharacterMain(id:string):void{
        this.DbzService.onDeleteCharacter(id);
    }

    onNewCharacterMain(character:Character):void{
        this.DbzService.onNewCharacter(character);
    }
}