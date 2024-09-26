export default {
  name: 'eventItem',
  title: 'Event Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the event',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the event',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'The date and time of the event',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'The location where the event will take place',
    },
    // {
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   description: 'An image representing the event',
    // },
    // {
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    //   description: 'A unique identifier for the event, used in URLs',
    // },
  ],
}
