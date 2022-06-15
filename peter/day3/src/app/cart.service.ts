import { Injectable } from '@angular/core';
import { IAnimals } from './IAnimals';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  animals: IAnimals[] =[];

  constructor() { }
  addToCart(animal: IAnimals){
    this.animals.push(animal)
  }

  getAnimals(){
    return this.animals;
  }
  clearCart(){
    this.animals =[]
    return this.animals;
  }
}
