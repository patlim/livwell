export default {
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'document',
  fields: [
    {
      name: 'name',
      type:'string',
      title: 'Section name',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'testimonialItem' }],
    },
  ],
}