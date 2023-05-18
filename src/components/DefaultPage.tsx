import Blur from './Blur'
import Hero from './Hero'
import Register from './Register'
import Stripe from './Stripe'
import EmptyMemory from './EmptyMemory'
import Copyright from './Copyright'

const DefaultPage = () => (
  <main className='grid grid-cols-2 min-h-screen'>
    <div className='flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover'>
      <Blur />
      <Stripe />
      <Register />
      <Hero />
      <Copyright />
    </div>
    <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover'>
      <EmptyMemory />
    </div>
  </main>
)
export default DefaultPage
