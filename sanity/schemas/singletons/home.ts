import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'heroSection',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          description: 'This field is the title of your personal website.',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'overview',
          description:
            'Used both for the <meta> description tag for SEO, and the personal website subheader.',
          title: 'Description',
          type: 'string',
        }),
        defineField({
          name: 'fadeImage',
          title: 'Fade Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'button1',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              type: 'string',
            }),
            defineField({
              name: 'link',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'button2',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              type: 'string',
            }),
            defineField({
              name: 'link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'aboutSection',
      type: 'object',
      fields: [
        defineField({
          name: 'about1',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              type: 'text',
            }),
          ],
        }),
        defineField({
          name: 'about2',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              type: 'text',
            }),
            defineField({
              name: 'image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
        defineField({
          name: 'about3',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Video Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'videoLink',
              type: 'string',
            }),
            defineField({
              name: 'keyPoints',
              type: 'array',
              of: [
                {
                  type: 'text',
                },
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'experienceSection',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          type: 'string',
        }),
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'text',
        }),
        defineField({
          name: 'heading',
          type: 'string',
        }),
        defineField({
          name: 'experience',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  type: 'text',
                }),
                defineField({
                  name: 'duration',
                  title: 'Duration',
                  type: 'duration',
                }),
                defineField({
                  name: 'tagline',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'servicesSection',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          type: 'string',
        }),
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'fadeImage',
          title: 'Fade Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'block',
                      marks: {
                        annotations: [
                          {
                            name: 'link',
                            type: 'object',
                            title: 'Link',
                            fields: [
                              {
                                name: 'href',
                                type: 'url',
                                title: 'Url',
                              },
                            ],
                          },
                        ],
                      },
                      styles: [],
                    }),
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'portfolioSection',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          type: 'string',
        }),
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'portfolios',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'reference',
              to: [{type: 'portfolio'}],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'keyIdeaSection',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          type: 'string',
        }),
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'keyIdeas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'contactSection',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          type: 'string',
        }),
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'fadeImage',
          title: 'Fade Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'buttonText',
          type: 'string',
        }),
      ],
    }),
    
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
