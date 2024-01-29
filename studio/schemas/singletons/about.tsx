import {defineArrayMember, defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'aboutpage',
  title: 'About',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'pageInfo',
      title: 'Page Info',
    },
    {
      name: 'intro',
      title: 'Intro Content',
    },
    {
      name: 'designTool',
      title: 'Design Tools',
    },
    {
      name: 'techSkills',
      title: 'Technologies and Skills',
    },

    {
      name: 'devprocess',
      title: 'Development Process',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'intro',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'intro',
    }),
    defineField({
      name: 'bio',
      title: 'Intro Bio',
      type: 'text',
      group: 'intro',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      group: 'intro',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'designTitle',
      title: 'Design Title',
      group: 'designTool',
      type: 'string',
    }),

    defineField({
      name: 'designtools',
      title: 'Design Tools',
      group: 'designTool',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [{type: 'string', name: 'title'}],
        },
      ],
    }),

    defineField({
      name: 'techstackTitle',
      title: 'Technologies & Skills Title',
      group: 'techSkills',
      type: 'string',
    }),

    defineField({
      name: 'techstack',
      title: 'Technologies and Skills',
      group: 'techSkills',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [{type: 'string', name: 'title'}],
        },
      ],
    }),

    defineField({
      name: 'devprocessTitle',
      title: 'Development Process Title',
      group: 'devprocess',
      type: 'string',
    }),

    defineField({
      name: 'devprocessstack',
      title: 'Development Process',
      group: 'devprocess',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [{type: 'string', name: 'title'}],
        },
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
