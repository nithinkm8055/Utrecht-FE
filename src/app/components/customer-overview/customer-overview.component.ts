import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.scss']
})
export class CustomerOverviewComponent implements OnInit {
  allProducts = [];
  product ;

  constructor(private service: ProductsService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {

    this.service.getProducts().subscribe((res: any) => {
      this.allProducts = res.productGroups;
    });
  }
}
