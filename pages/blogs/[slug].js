import PageLayout from '@/components/PageLayout'
import { useRouter } from 'next/router'

export default function BlogDetail() {
  const router = useRouter()
  // dosya adı ile aynı olmalı
  const { slug } = router.query

  return (
    <PageLayout>
      <h1>Blog Detail</h1>
    </PageLayout>
  )
}
