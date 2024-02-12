import {defineArrayMember, defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  groups: [
    {
      name: 'pageInfo',
      title: 'Page Info',
    },
    {
      name: 'meta',
      title: 'Page SEO',
    },
  ],
  fields: [
    defineField({
      name: 'aboutPageTitle',
      title: 'Page Tilte',
      type: 'string',
      group: 'pageInfo',
    }),
    defineField({
      name: 'aboutPageSlug',
      title: 'Page URL',
      type: 'slug',
      group: 'pageInfo',
      options: {
        source: 'aboutPageTitle',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'seo',
      title: 'Meta',
      type: 'meta',
      group: 'meta',
    }),
    defineField({
      name: 'Socialmedia',
      title: 'Social media appearance',
      type: 'openGraph',
      group: 'meta',
    }),
  ],
  preview: {
    select: {
      title: 'aboutPageTitle',
    },
  },
})
