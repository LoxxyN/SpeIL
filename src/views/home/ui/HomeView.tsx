import { ReviewPanel } from '@widgets/index'

export const HomeView = () => {
  return (
    <div className="wrapper flex h-full flex-col justify-between">
      <h1 className="mb-12 text-center text-5xl font-bold">WRITE, REVIEW, UPDATE</h1>
      <ReviewPanel />
    </div>
  )
}
