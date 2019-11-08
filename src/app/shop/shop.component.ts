import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Product Details',
            link: './product-details',
            index: 0
        }, {
            label: 'Order Details',
            link: './order-details',
            index: 1
        }, {
          label: 'Catagory',
          link: './catagory',
          index: 2
      }, {
        label: 'Create Order',
        link: './create-order',
        index: 3
    }
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

}
