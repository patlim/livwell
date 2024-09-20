export default {
  name: 'testimonialItem',
  type: 'document',
  title: 'Testimonial Item',
  fields: [
    {
      name: 'testimonialText',
      type: 'text',
      title: 'Testimonial Text',
      description: 'The main testimonial or review text.',
    },
    {
      name: 'authorName',
      type: 'string',
      title: 'Author Name',
      description: 'The name of the person giving the testimonial.',
    },
    {
      name: 'authorDescription',
      type: 'string',
      title: 'Author Description',
      description: 'Optional description or position of the person (e.g., CEO, Manager).',
    },
  ],
};
