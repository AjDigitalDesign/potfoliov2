import {defineArrayMember, defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'projectPage',
  title: 'Projects',
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
      name: 'projectPageTitle',
      title: 'Page Tilte',
      type: 'string',
      group: 'pageInfo',
    }),
    defineField({
      name: 'projectPageSlug',
      title: 'Page URL',
      type: 'slug',
      group: 'pageInfo',
      options: {
        source: 'projectPageTitle',
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
      title: 'projectPageTitle',
      // media: 'mainImage',
    },
  },
})
