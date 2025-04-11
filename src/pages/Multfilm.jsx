

// Component
import { Helmet } from 'react-helmet'
import InputSelekt from '../components/InputSelekt'
// img
import multic from '../img/multic-page.jpg'

const Multfilm = () => {

    return (
        <main className='bg-gradient-to-b from-white to-green-50 pb-16'>
            <Helmet>
                <link rel="canonical" href="https://yuldizlibolalar.vercel.app/multfilmlar" />
                <meta name="description" content="Yulduzli bolalar multfilmlar sahifasida bolalar uchun qiziqarli quvnoq multfilmlarni korishlari mumkin." />
            </Helmet>

            <div className='mb-5'>
                <div className='relative w-full'>
                    <img className='w-full h-36 md:h-56' src={multic} alt="multic img" />
                    <h1 className='absolute top-10 left-1/2 -translate-x-1/2 text-xl text-red-800 font-bold sm:text-2xl sm:top-14 md:text-4xl md:top-16 lg:text-5xl'>Multfilm</h1>
                </div>
            </div>
            <InputSelekt />
          
        </main>
    )
}

export default Multfilm