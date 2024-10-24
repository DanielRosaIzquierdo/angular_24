import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
    constructor() { }

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 500
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Pikolo',
            power: 8500
        }

    ];



    onNewCharacter(character: Character): void {
        const newCharacter: Character = {
            id: uuid(),
            name: character.name,
            power: character.power
        }

        this.characters.push(newCharacter);
    }

    onDeleteCharacter(id: string): void {

        this.characters = this.characters.filter((character) => character.id !== id);

    }

}