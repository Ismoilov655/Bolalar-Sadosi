import React from 'react'
import song from '../img/song-page.png'
import InputSelekt from '../components/InputSelekt'
import { Helmet } from 'react-helmet'

const Qoshiqlar = () => {
    return (
        <main className='bg-gradient-to-b from-white to-green-50 pb-16 '>

            <Helmet>
                <link rel="canonical" href="https://yuldizlibolalar.vercel.app/qoshiqlar" />
                <meta name="description" content="Yulduzli bolalar qoshiqlar sahifasida bolalar uchun qiziqarli qo'shiqlar mavjud." />
            </Helmet>
            <div className='mb-5'>
                <div className='relative w-full'>
                    <img className='w-full h-36 md:h-56' src={song} alt="song img" />
                    <h1 className='absolute top-10 left-1/2 -translate-x-1/2 text-xl text-red-800 font-bold sm:text-2xl sm:top-14 md:text-4xl md:top-16 lg:text-5xl'>Qo'shiqlar</h1>
                </div>
            </div>

            <InputSelekt />
        </main>
    )
}

export default Qoshiqlar