import {defineArrayMember, defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'frontpage',
  title: 'Front Page',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'pageInfo',
      title: 'Page Info',
    },
    {
      name: 'banner',
      title: 'Hero Banner',
    },
    {
      name: 'skills',
      title: 'Top Skills',
    },
    {
      name: 'project',
      title: 'Recent Proejcts',
    },
    {
      name: 'meta',
      title: 'Page SEO',
    },
  ],
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Tilte',
      type: 'string',
      group: 'pageInfo',
    }),
    defineField({
      name: 'pageSlug',
      title: 'Page URL',
      type: 'slug',
      group: 'pageInfo',
      options: {
        source: 'pageTitle',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'heroBanner',
      title: 'Hero Background Image',
      type: 'image',
      group: 'banner',
    }),
    defineField({
      name: 'heroBannerIntroTitle',
      title: 'Intro Title',
      type: 'string',
      group: 'banner',
    }),
    defineField({
      name: 'heroBannerTitle',
      title: 'Title',
      type: 'string',
      group: 'banner',
    }),
    defineField({
      name: 'heroBannerDescription',
      title: 'Description',
      type: 'string',
      group: 'banner',
    }),
    defineField({
      name: 'skills',
      title: 'Top Skills',
      group: 'skills',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {type: 'string', name: 'icon'},
            {type: 'string', name: 'title'},
            {
              type: 'string',
              name: 'description',
              validation: (Rule) => [
                Rule.required()
                  .min(40)
                  .max(150)
                  .error('Description must be greater than 40 character and max character of 150'),
              ],
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'recentProject',
      title: 'Recent Projects',
      group: 'project',
      type: 'array',
      validation: (Rule) => Rule.max(3),
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'projects'}],
        }),
      ],
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
      title: 'pageTitle',
      media: 'mainImage',
    },
  },
})
