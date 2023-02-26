import { createClient } from '@sanity/client'

const options = {
  dataset: process.env.SANITY_DATASET_NAME
    ? process.env.SANITY_DATASET_NAME
    : process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID
    ? process.env.SANITY_PROJECT_ID
    : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2022-01-12',
}

export default createClient(options)
