import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ALL_PRODUCTS, PRODUCT_DETAILS, API_END_POINT } from '../constants';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private http: HttpClient) { }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getProducts() {
    const apiUrl = `/product-groups`;
    return this.http
      .get(apiUrl)
      .pipe(catchError(this.handleError()));
  }

  getAllProducts() {
    return ALL_PRODUCTS; 
  }
  getProductDetail(productKey: string) {
    const apiUrl = `/product-groups/products/{productId}?productId=${productKey}`;
    return this.http
      .get(apiUrl)
      .pipe(catchError(this.handleError()));
  }
  getProduct(productKey: string) {
    return PRODUCT_DETAILS.filter((product) => product.productCode === productKey)[0];
  }
}