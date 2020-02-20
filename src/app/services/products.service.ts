import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { ALL_PRODUCTS, PRODUCT_DETAILS } from '../constants';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return ALL_PRODUCTS; 
  }
  getProductDetail(productKey: string) {
    return PRODUCT_DETAILS.filter((product) => product.productCode === productKey)[0];
  }
}