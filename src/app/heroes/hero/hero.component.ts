import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Greys';
  public age:number = 21;

  get capitalizacionName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name } - ${ this.age }`;
  }

  changeName():void{
    this.name = 'Yulieth';
  }

  changeAge():void{
    this.age = 22;
  }
}
