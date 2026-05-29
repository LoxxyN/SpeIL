import { ReviewDetailsNotFound } from '@views/index'
import { ReviewPanel } from '@widgets/index'

export const ReviewDetailsView = ({ id }: { id: string }) => {
  return (
    <div className="wrapper flex h-full flex-col justify-between">
      <ReviewPanel showActions={false} isReadonly reviewId={id}>
        <ReviewDetailsNotFound />
      </ReviewPanel>
    </div>
  )
}
