import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden'>
      <Header />
      <div className='relative w-full h-full '>
        <Hero />
      </div>
    </div>
  )
}
