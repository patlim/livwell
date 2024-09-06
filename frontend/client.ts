import { createClient } from '@sanity/client'

export default createClient({
  projectId: '83v7fb7k',
  dataset: 'production',
  useCdn: true
})