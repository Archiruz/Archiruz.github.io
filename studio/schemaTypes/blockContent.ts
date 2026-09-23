import {defineType, defineField} from 'sanity'

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    defineField({
      type: 'block',
      name: 'block',
      title: 'Block',
    }),
    // Add more block types here later (e.g. code, image, etc.)
  ],
})
