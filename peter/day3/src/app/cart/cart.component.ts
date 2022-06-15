import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IAnimals } from '../IAnimals';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  animals: IAnimals[]=[];
  checkoutForm = this.forms.group({
    name:"",
    address:""
  });
  constructor(private cartService: CartService, private forms:FormBuilder) { }

  clearCart(){
    window.alert("Cleared")
    this.animals = this.cartService.clearCart()
  }

  onSubmit(){
    console.warn("Your furry friend is on the way", this.checkoutForm.value);
    this.animals = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.animals = this.cartService.getAnimals();
  }

}
