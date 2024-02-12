import {defineArrayMember, defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  groups: [
    {
      name: 'meta',
      title: 'Page SEO',
    },
  ],
  fields: [
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
})
