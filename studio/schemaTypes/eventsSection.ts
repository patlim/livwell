export default {
  name: 'eventsSection',
  title: 'Events Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'The title of the events section',
    },
    {
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'eventItem' } }],
      description: 'A list of events in this section',
    },
  ],
}
