import React from 'react'
// img
import hero from '../img/hero.jpg'
import InputSelekt from '../components/InputSelekt'


const QiziqarliMatematika = () => {
    return (
        <main className='bg-gradient-to-b from-white to-green-50 pb-16'>
            <div className='mb-5'>
                <div className='relative w-full'>
                    <img className='w-full h-36 md:h-56' src={hero} alt="hero img" />
                    <h1 className='absolute top-10 left-1/2 -translate-x-1/2 text-xl text-red-800 font-bold sm:text-2xl sm:top-14 md:text-4xl md:top-16 lg:text-5xl'>Matematika</h1>
                </div>
            </div>

            <InputSelekt/>
        </main>
    )
}

export default QiziqarliMatematika