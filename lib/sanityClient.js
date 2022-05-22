import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'eg3fdute',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skUNtZQaj1yXYrYU0HNWkcYkCrrEXaZBOxxmoJK4YCi4V9vi8ci7lGt2Rhpfk6TYPLO2eeGHBDALpY769toLfyoOQEF5FTcJbLC8ofQ1B1EzPsOLSSt9ePNkpRZkdZhtln2i02fTByNUwgb7WNgI3XzAALoHB0UqU1L5ACmvnIyrGZiKCXuX',
  useCdn: false,
})
