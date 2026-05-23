import { Link } from '@heroui/react'

export const ReviewHistoryListEmpty = () => {
  return (
    <section className="review-history">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <h2 className="text-3xl font-semibold">Похоже тут пусто ;(</h2>
        <p className="text-muted">
          Хотите{' '}
          <Link href="/" className="not-hover:text-muted">
            получить ревью?
          </Link>
        </p>
      </div>
    </section>
  )
}
