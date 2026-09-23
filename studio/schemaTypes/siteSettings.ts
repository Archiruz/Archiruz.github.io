import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title / Tagline',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {value: 'github', title: 'GitHub'},
                  {value: 'linkedin', title: 'LinkedIn'},
                  {value: 'twitter', title: 'Twitter'},
                  {value: 'email', title: 'Email'},
                  {value: 'other', title: 'Other'},
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.uri({
                scheme: {
                  email: true,
                },
              }),
              hidden: ({parent}) => parent?.platform === 'email',
            }),
            defineField({
              name: 'email',
              title: 'Email Address',
              type: 'string',
              hidden: ({parent}) => parent?.platform !== 'email',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'title',
    },
  },
})
