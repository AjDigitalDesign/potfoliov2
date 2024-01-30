import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'object',
  fields: [
    defineField({
      name: 'testimonial',
      title: 'Testimonials',
      type: 'string',
    }),
    defineField({
      name: 'testimonialAuthor',
      title: 'Author Name',
      type: 'string',
    }),
  ],
})
