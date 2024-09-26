import { createClient } from '@sanity/client'

export default createClient({
  projectId: '83v7fb7k',
  dataset: 'production',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2023-09-26',
})