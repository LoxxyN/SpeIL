import { ReviewPanel } from '@widgets/index'

export const HomeView = () => {
  return (
    <div className="wrapper py-16">
      <h1 className="mb-12 text-center text-5xl font-bold">WRITE, REVIEW, UPDATE</h1>
      <ReviewPanel />
    </div>
  )
}
