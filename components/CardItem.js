import { urlFor } from '@/lib/sanityImageBuilder'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from 'react-bootstrap'

export default function CardItem({
  title,
  subtitle,
  slug,
  id,
  image,
  date,
  link,
  author,
}) {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <Image
            src={urlFor(author.avatar).width(250).height(250).url()}
            className="rounded-circle mr-3"
            height="50"
            width="50"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {author?.name || 'No Name'}
            </Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img
            src={urlFor(image).width(250).height(250).url()}
            alt="Card image cap"
          />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      {link && (
        <Link {...link} className="card-button">
          Read More
        </Link>
      )}
    </Card>
  )
}
