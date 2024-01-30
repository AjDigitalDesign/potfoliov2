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
      name: 'aboutSection',
      title: 'About',
    },
    {
      name: 'testimonialSection',
      title: 'Testimonial',
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
      name: 'heroBannerCta',
      title: 'CTA Link',
      type: 'string',
      group: 'banner',
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'aboutSection',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'aboutSection',
    }),
    defineField({
      name: 'bio',
      title: 'Intro Bio',
      type: 'text',
      group: 'aboutSection',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      group: 'aboutSection',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'designTitle',
      title: 'Design Title',
      group: 'aboutSection',
      type: 'string',
    }),

    defineField({
      name: 'designtools',
      title: 'Design Tools',
      group: 'aboutSection',
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
      group: 'aboutSection',
      type: 'string',
    }),

    defineField({
      name: 'techstack',
      title: 'Technologies and Skills',
      group: 'aboutSection',
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
      group: 'aboutSection',
      type: 'string',
    }),

    defineField({
      name: 'devprocessstack',
      title: 'Development Process',
      group: 'aboutSection',
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
      name: 'testimonials',
      title: 'Testimonial',
      group: 'testimonialSection',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Testimonail',
          fields: [
            {type: 'text', name: 'testimonial'},
            {type: 'string', name: 'testimonialAuthor'},
          ],
        },
      ],
    }),

    defineField({
      name: 'recentProject',
      title: 'Recent Projects',
      group: 'project',
      type: 'array',
      validation: (Rule) => Rule.min(3),
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
