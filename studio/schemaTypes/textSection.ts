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
      name: 'fullScreen',
      type: 'boolean',
      title: 'Full screen',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'showHeading',
      type: 'boolean',
      title: 'Show heading',
      initialValue: true,
    }),
  ],
})
