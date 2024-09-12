export default {
  name: 'practitionerSection',
  title: 'PractitionerSection',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the practitioner'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the practitioner'
    },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'A headshot image of the practitioner'
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'The text to display on the button'
    },
    {
      name: 'buttonSlug',
      title: 'Button Link',
      type: 'slug',
      description: 'For example "services" or "events" will link to pages /services, /events respectively '
    }
  ]
}
