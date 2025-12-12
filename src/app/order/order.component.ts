import {Component, OnInit} from '@angular/core';
import {RadioOptionModel} from "../shared/radio/radio-option.model";
import {OrderService} from "./order.service";
import {CarItem} from "../restaurant-detail/shopping-cart/item-cart.model";
import {Order, OrderItem} from "./order";
import {Router} from "@angular/router";
import {Restaurant} from "../restaurants/restaurant/restaurant.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit{

  orderForm!: FormGroup;
  restaurant?: Restaurant;

  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  numberPattern = /^[0-9]*$/;

  paymentOptions: RadioOptionModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: 'CRE'},
    {label: 'Catão de Refeição', value: 'REF'}
  ];

  ngOnInit() {

    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control('', []),
      paymentOption: this.formBuilder.control('', [Validators.required])
    });

    this.restaurantDeliveryValue()
  }

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  restaurantDeliveryValue() {
    this.cartItems()
      .map((cartItem) => {
        this.orderService.findRestaurantByItemCardapio(cartItem.itemCardapio.restaurantId)
          .subscribe((restaurant) => {
            this.restaurant = restaurant
          })
      })
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CarItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CarItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CarItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CarItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.items = this.cartItems().map(
      (item: CarItem) => new OrderItem(item.quantidade, item.itemCardapio.id))
    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        this.router.navigate(['/order-summary'])
        this.orderService.clear();
    })
    console.log(order)
  }

}
