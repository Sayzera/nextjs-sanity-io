import { Row, Col, Image, Card } from 'react-bootstrap'
import PageLayout from '@/components/PageLayout'
import AuthorIntro from '@/components/AuthorIntro'
import CardListItem from '@/components/CardListItem'
import CardItem from '@/components/CardItem'
import { getAllBlogs } from '@/lib/api'
export default function Home(props) {
  const blogs = props.blogs
  console.log(blogs)

  return (
    <PageLayout className={'blog-detail-page'}>
      <AuthorIntro />
      <hr />
      {/* className from props */}
      <div className={`page-wrapper`}>
        <Row className="mb-5">
          <Col md="12">
            {/* CardListItem STARTS */}
            <CardListItem />
            {/* CardListItem ENDS */}
          </Col>
        </Row>
        <Row>
          {blogs?.map((item) => (
            <Col lg="4" sm="1" md="6" key={item.id}>
              <CardItem
                title={item.title}
                subtitle={item.subtitle}
                slug={item.slug}
                id={item.id}
                date={item.date}
                image={item.coverImage}
                author={item.author}
                link={{
                  href: '/blogs/[slug]',
                  as: `/blogs/${item.slug}`,
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}

/**
Bu fonksiyon, getServerSideProps() fonksiyonundan farklı olarak, verileri
 yalnızca uygulama inşa edildiği sırada (build-time) getirir ve sık sık değişmeyen 
 veriler için idealdir. getServerSideProps() ise,
 her istekte sunucudan veri çeker ve daha dinamik içerik oluşturmamıza olanak tanır.
 *
 */
export async function getStaticProps() {
  const blogs = await getAllBlogs()

  return {
    props: {
      blogs,
    },
  }
}
