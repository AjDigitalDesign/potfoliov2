import {defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'meta',
  title: 'Meta',
  fields: [
    {
      type: 'string',
      title: 'Meta Title',
      name: 'title',
    },
    {
      type: 'text',
      name: 'description',
      title: 'Meta description',
    },
    {
      name: 'keyphrase',
      title: 'Focus keyphrase',
      type: 'string',
    },
  ],
})
