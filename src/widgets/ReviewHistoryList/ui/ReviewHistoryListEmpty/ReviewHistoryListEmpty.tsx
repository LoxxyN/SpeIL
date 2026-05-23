import { Link } from '@heroui/react'

export const ReviewHistoryListEmpty = () => {
  return (
    <section className="review-history">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Пока тут пусто</h2>
        <p className="text-muted">
          Хотите <Link className="not-hover:text-muted">получить ревью?</Link>
        </p>
      </div>
    </section>
  )
}
