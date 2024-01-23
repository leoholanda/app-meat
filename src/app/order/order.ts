class Order {
  constructor(public address: string,
              public number: number,
              public optionAddress: string,
              public paymentOptional: string,
              public items: OrderItem[] = []
              ) {
  }
}

class OrderItem {
  constructor(public quantity: number, public menuId: string) { }
}

export  {Order, OrderItem}
