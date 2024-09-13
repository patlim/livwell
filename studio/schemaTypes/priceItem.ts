export default {
  name: 'priceItem',
  title: 'Price Item',
  type: 'object',
  fields: [
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Duration of the appointment',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price for the appointment',
    },
  ],
}