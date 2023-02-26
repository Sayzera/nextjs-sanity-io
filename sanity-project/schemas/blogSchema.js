import {defineConfig} from 'sanity'

export default defineConfig({
  name: 'blog',
  title: 'blog',
  type: 'document',
  fields: [
    {
      title: 'Başlık',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Başlık alanı boş bırakılamaz.'),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Alt Başlık',
      validation: (Rule) => Rule.required().error('Alt Başlık alanı boş bırakılamaz.'),
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Kapak Resmi',
      validation: [(Rule) => Rule.required().error('Kapak resmi alanı boş bırakılamaz.')],
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Tarih',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Slug alanı otomatik olarak doldurulur.',
      options: {
        source: 'title',
        maxLength: 5,
      },
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Yazar',
      to: [{type: 'author'}],
    },
  ],
})
