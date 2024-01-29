import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(40)
          .max(50)
          .error(
            'SEO titles between 40 and 50 characters with commonly searched words have the best click-through-rates',
          ),
      ],
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      validation: (Rule) => [
        Rule.required()
          .min(50)
          .max(156)
          .error(
            'Good SEO descriptions utilize keywords, summarize the story and are between 140-156 characters long.',
          ),
      ],
      type: 'text',
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      validation: (Rule) => [
        Rule.required()
          .min(40)
          .max(50)
          .error(
            'SEO titles between 40 and 50 characters with commonly searched words have the best click-through-rates',
          ),
      ],
      type: 'string',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      validation: (Rule) => [
        Rule.required()
          .min(50)
          .max(156)
          .error(
            'Good SEO descriptions utilize keywords, summarize the story and are between 140-156 characters long.',
          ),
      ],
      type: 'text',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
})
