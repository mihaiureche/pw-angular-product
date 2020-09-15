import { Component, OnInit } from '@angular/core';
import { Product } from '../../types/product';
import { products } from '../../mocks/mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = products;
  
  constructor() { }

  ngOnInit(): void {
  }

}
