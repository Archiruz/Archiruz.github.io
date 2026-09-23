import {defineField, defineType} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill Category',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Backend, Fullstack, Data Science',
    }),
    defineField({
      name: 'items',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Skill Name',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'react-icons icon name (e.g. "SiPython", "SiFastapi")',
            }),
            defineField({
              name: 'color',
              title: 'Icon Color',
              type: 'string',
              description: 'e.g. text-green-500',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'icon',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'category',
    },
  },
})
