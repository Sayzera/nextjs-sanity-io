import client from './sanity'

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  'id': _id,
  date,
  'imageUrl': coverImage.asset->url,
  coverImage,
  author->{name, avatar, _id}
`
/**
 * author referansı olduğu için author->{} ile author objesinin içindeki alanları alıyoruz.
 * slug yazısını bu durumda istediğimiz bir isim olarak kullanabiliyoruz.
 * 'slug': slug.current object destructuring (objenin içinden ilgili yeri parçalayarak aldı)
 */

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`)
  return results
}
