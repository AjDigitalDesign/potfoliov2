import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'projectCategories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'projectCategory'}}],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
    }),
    defineField({
      name: 'projectlanguages',
      title: 'Project Languages',
      type: 'string',
    }),
    defineField({
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      title: 'Github Link',
      name: 'githubLink',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
})
