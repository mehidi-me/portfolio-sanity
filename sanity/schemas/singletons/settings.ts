import {CogIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'menuItem',
          title: 'Menu Item',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'menuMainButton',
      title: 'Menu Main Button',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'socialLink',
      title: 'Social Link',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'instagram',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'linkedin',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'footer',
      description: 'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Footer Info',
      type: 'string',
    }),
    defineField({
      name: 'adminEmail',
      title: 'Admin Email',
      type: 'string',
    }),
    defineField({
      name: 'favicon',
      type: 'image',
    }),
    defineField(
      {
        title: "Seo",
        name: "seo",
        type: "seoMetaFields",
      },
    )
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
        subtitle: 'Menu Items, Footer Info, and Open Graph Image',
      }
    },
  },
})
