import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      of: [
        defineArrayMember({
          name: 'textSection',
          title: 'Text Section',
          type: 'reference',
          to: { type: 'textSection' },
        }),
        defineArrayMember({
          name: 'practitionerSection',
          title: 'Practitioner Section',
          type: 'reference',
          to: { type: 'practitionerSection' },
        }),
        defineArrayMember({
          name: 'eventsSection',
          title: 'Events Section',
          type: 'reference',
          to: { type: 'eventsSection' },
        }),
        defineArrayMember({
          name: 'pricingSection',
          title: 'Pricing Section',
          type: 'reference',
          to: { type: 'pricingSection' },
        }),
        defineArrayMember({
          name: 'testimonialSection',
          title: 'Testimonial Section',
          type: 'reference',
          to: { type: 'testimonialSection' },
        }),
      ],
    }),
  ],
});
