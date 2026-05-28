import Link from 'next/link'

export const ReviewDetailsNotFound = () => {
  return (
    <div className="wrapper flex flex-col items-center gap-4 py-24">
      <h2 className="text-2xl font-semibold">Ой, кажется такого ревью не найдено</h2>

      <Link href="/history" className="link not-hover:text-muted text-base transition">
        Вернуться к истории
      </Link>
    </div>
  )
}
