import { Component, OnInit, TemplateRef } from '@angular/core';
import { ShopService } from 'src/app/services/shopService/shop.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
	selector: 'app-product-detaisl',
	templateUrl: './product-detaisl.component.html',
	styleUrls: ['./product-detaisl.component.css'],
})
export class ProductDetaislComponent implements OnInit {
	shops = [];
	products;
	name;
	address;
	contact;
	shop_id;
	search;
	productFilter;

	constructor(private shopService: ShopService, private dialog: MatDialog, private route: Router) { }

	ngOnInit() {
		this.getShops();
	}

	getShops() {
		this.shopService.getShop("user_123456").subscribe(res => {
			res.forEach(result => {
				this.shops.push(result.data());
			});
		});

		console.log(this.shops);
	}

	onSubmit() {
		const data = {
			name: this.name,
			type: 'Shop Owner',
			is_login: true,
			status: true,
			address: this.address,
			contact: this.contact,
		};
		this.shopService.addShop(data).then(res => { });
		if (data === null) {
			return;
		}
		this.shops.push(data);
		this.name = "";
		this.address = "";
		this.contact = "";
	}

	onShopUpdate(data) {
		this.shopService.editShop(data).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		});
	}

	onProductUpdate(data) {
		console.log(data);
	}

	onDeleteShop(data) {
		const msg = confirm('Are You Sure you want to delete?');
		if (msg === true) {
			this.shopService.deleteShop(data.id).then(() => {
				const index = this.shops.indexOf(data);
				this.shops.splice(index, 1);
				console.log(data.id);
			}).catch(err => {
				console.log(err);
			});
		}
	}

	onOpenDialog(templateRef: TemplateRef<any>) {
		this.dialog.open(templateRef);
	}
	
	onOpenProductDialog(templateRef: TemplateRef<any>) {
		this.dialog.open(templateRef);
	}

	getProducts(id) {
		console.log(id);
		this.route.navigate(["/my-products", id]);
	}

	getOrders(id) {
		console.log(id);
	}
}