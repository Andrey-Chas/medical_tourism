import Feed from '@/components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col my-10 py-10 flex items-center justify-center">
      <h1 className="text-5xl font-semibold text-blue-500">
        Medical Tourism
      </h1>

      <Feed />
    </section>
  )
}

export default Home
