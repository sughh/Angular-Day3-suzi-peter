import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IAnimals } from '../IAnimals';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  animals: IAnimals[]=[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.animals = this.cartService.getAnimals();
  }

}
