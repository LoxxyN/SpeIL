import { BackLink } from '@shared/ui'
import { ReviewHistoryList } from '@widgets/index'

export const HistoryView = () => {
  return (
    <div className="wrapper">
      <BackLink href="/" title="На главную" />
      <ReviewHistoryList />
    </div>
  )
}
