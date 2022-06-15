import { Component, OnInit } from '@angular/core';
import { animals } from '../animals';
import { IAnimals } from '../IAnimals';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  animals:IAnimals[] =animals;
  constructor() { }

  ngOnInit(): void {
  }

}
