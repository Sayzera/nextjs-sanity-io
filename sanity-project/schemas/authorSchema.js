import {defineConfig} from 'sanity'

export default defineConfig({
  name: 'author',
  title: 'Yazar',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Ad Soyad',
    },
    {
      name: 'avatar',
      type: 'image',
      title: 'Kapak Resmi',
    },
  ],
})
