import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { animals } from '../animals';
import { CartService } from '../cart.service';
import { IAnimals } from '../IAnimals';



@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {
  animal: IAnimals = {} as IAnimals;
  id: number = 0;
  constructor(private route: ActivatedRoute, private cartService: CartService ) { }

  addToCart(){
    window.alert("Your new furry friend awaits you!");
    this.cartService.addToCart(this.animal)

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["animalId"]; //"+" sanme as Number()
      this.animal = animals[this.id]
    } )
  }

}
