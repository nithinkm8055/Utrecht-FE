import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  productDetail;
  product = {};
  constructor(private service: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const product = params['product'];
      this.loadProduct(product);
    });
    
  }

  loadProduct(product: string) {
    this.service.getProductDetail(product).subscribe((res) => {
     this.product  = res;
    });
    this.productDetail = this.service.getProduct(product);
  }
}
