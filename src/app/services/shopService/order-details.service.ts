
export class OrderDetailsService {
  orders = [
    {
      id: 1,
      customerName: 'Dulon',
      customerId: 'Dulon 1',
      customerAddress: '16/b dulonpur, hopar',
      customerContact: '01********#',
      orderedProduct: [
        {
          id: 1,
          quantity: 2
        },
        {
          id: 2,
          quantity: 1
        }
      ]
    },
    {
      id: 2,
      customerName: 'Ahanf',
      customerId: 'Ahnaf 1',
      customerAddress: '16/b varsitygate, Akhali',
      customerContact: '01********#',
      orderedProduct: [
        {
          id: 5,
          quantity: 2
        },
        {
          id: 7,
          quantity: 1
        }
      ]
    }
  ];
}
