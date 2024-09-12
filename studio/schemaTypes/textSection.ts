import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'alignment',
      type: 'string',
      title: 'Alignment',
      initialValue: 'center',
      options: {
        list: ['left', 'center', 'right'],
      },
    }),
    defineField({
      name: 'showHeading',
      type: 'boolean',
      title: 'Show heading',
      initialValue: true,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
