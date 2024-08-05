import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.componet.html'
})

export class MainPageComponent  {
  constructor(private dbzService: dbzService){}

  get character():Character[]{
    return[...this.dbzService.character]
  }

  onDeleteCharacter( id: string ):void{
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter( character: Character){
    this.dbzService.addCharacter(character);
  }

}
