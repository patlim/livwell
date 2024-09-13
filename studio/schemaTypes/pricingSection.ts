export default {
  name: 'pricingSection',
  title: 'Pricing Section',
  type: 'document',
  fields: [
    {
      name: 'heading',
      type:'string',
      title: 'Section Heading',
      description: 'The heading for the pricing section',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Subheading for the pricing section',
    },
    {
      name: 'prices',
      title: 'Prices',
      type: 'array',
      of: [{ type: 'priceItem' }],
      description: 'List of pricing items',
    },
  ],
}