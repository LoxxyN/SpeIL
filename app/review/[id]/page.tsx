import { ReviewDetailsView } from '@/src/views/review-details'

export default async function ReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return <ReviewDetailsView id={id} />
}
