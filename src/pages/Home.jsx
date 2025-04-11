import React from 'react'
import { Link } from 'react-router'

// img
import home from '../img/home-page.png'
import urToqmoq from '../img/ur-toqmoq.jpg'
import qilichBotir from '../img/qilich-botir.jpg'
import oltinTarvuz from '../img/oltin-tarvuz.jpg'
import zumradQimmat from '../img/zumrat-qimmat.jpg'
import pomidor from '../img/pomidor.jpg'
import beshMahluq from '../img/besh-mahluq.jpg'
import beshBola from '../img/besh-bola.jpg'
import masha from '../img/masha.jpg'
import joja from '../img/joja.jpg'
import finger from '../img/finger.jpg'
import babyShark from '../img/baby-shark.jpg'
import bathSong from '../img/bath-song.jpg'
import son from '../img/son.jpg'
import shakl from '../img/shakl.webp'
import qoshish from '../img/qoshish.jpg'
import belgilar from '../img/belgilar.jpg'
import alifbo from '../img/alifbo.jpg'
import sonlar from '../img/sonlar.jpg'
import ranglar from '../img/ranglar.jpg'
import fasllar from '../img/fasllar.jpg'
import badantarbiya from '../img/badantarbiya.jpg'
import atirgul from '../img/atirgul.jpg'
import soyabon from '../img/soyabon.jpg'
import ayiqcha from '../img/ayiq.jpg'
import ninachi from '../img/ninachi.jpg'
import ayiq from '../img/1.png'
import ukki from '../img/2.png'
import bugi from '../img/3.png'
import sher from '../img/4.png'

const Home = () => {

  return (
    <>
      <main>
        <div className='mb-5'>
          <div className='relative w-full'>
            <img className='w-full h-36 md:h-56' src={home} alt="" />
            <h1 className='absolute top-10 left-1/2 -translate-x-1/2 text-xl text-red-900 font-bold sm:text-2xl sm:top-14 md:text-4xl md:top-16 lg:text-5xl'>Bola tv  </h1>
          </div>
        </div>

        <section className='py-7 sm:py-10'>
          <div className='w-full max-w-7xl mx-auto px-5'>
            <div className='md:flex justify-between items-center flex-col md:flex-row'>
              <div className='w-full grid grid-cols-2 gap-2 mb-8 md:mr-10 md:w-1/2'>
              <img className='w-full h-full' src={urToqmoq} alt="urtoqmoq" />
              <img className='w-full h-full' src={qilichBotir} alt="qilich botir" />
              <img className='w-full h-full' src={zumradQimmat} alt="zumrat va qimmat" />
              <img className='w-full h-full' src={oltinTarvuz} alt="oltin tarvuz" />
              </div>
              <div className='w-full flex flex-col justify-center items-center md:w-1/2'>
                <h2 className='font-bold text-br-violet text-3xl mb-5 text-center'>Ertaklar</h2>
                <p className='text-lg text-center mb-5'>Ushbu sahifada o'zbek va jahom xalq ertaklarining eng sara namunalari: Ur to'qmoq, Zumrat va Qimmat, Oltin tarvuz, Tohir va Zuhra, Egri va to'gri shu va shu kabi ertaklar bilan tanishishingiz mumkin.</p>
                <Link className=' md:inline-flex bg-blue-200 px-5 py-2 rounded-md transition-all duration-300 hover:bg-green-300' to="ertaklar" >Sahifaga o'tish</Link>
              </div>
            </div>
          </div>
        </section>

        <section className='py-7 sm:py-10'>
          <div className='w-full max-w-7xl mx-auto px-5'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-centers'>
              <div className='w-full flex flex-col  justify-center items-center md:mr-10 md:w-1/2'>
                <h2 className='font-bold text-br-violet text-3xl mb-5 text-center'>Multfilm</h2>
                <p className='text-lg text-center mb-5'>Ushbu sahifada o'zbek va jahon multfilmlarining eng sara namunalari: Pomidor doppi, Masha va ayiq, Beshta kichkina bola, Echki bolalari, Mittivoylar shu va shu kabi multfilmlar bilan tanishishingiz mumkin.</p>
                <Link className=' md:inline-flex bg-blue-200 px-5 py-2 rounded-md transition-all duration-300 hover:bg-green-300' to="multfilm">Sahifaga o'tish</Link>
              </div>
              <div className='w-full grid grid-cols-2 gap-2 mb-8 md:mr-10 md:w-1/2'>
              <img className='w-full h-full' src={pomidor} alt="doppi pomidor " />
              <img className='w-full h-full' src={beshMahluq} alt="besh mahluq" />
              <img className='w-full h-full' src={beshBola} alt="besh bola" />
              <img className='w-full h-full' src={masha} alt="masha va ayiq" />
              </div>
            </div>
          </div>
        </section>

        <section className='py-7 sm:py-10'>
          <div className='w-full max-w-7xl mx-auto px-5'>
            <div className='flex justify-between items-center flex-col md:flex-row'>
              <div className='w-full grid grid-cols-2 gap-2 mb-8 md:mr-10 md:w-1/2'>
              <img className='w-full h-full' src={joja} alt="joja" />
              <img className='w-full h-full' src={finger} alt="finger" />
              <img className='w-full h-full' src={babyShark} alt="baby shark" />
              <img className='w-full h-full' src={bathSong} alt="bath song" />
              </div>
              <div className='w-full flex flex-col justify-center items-center md:w-1/2'>
                <h2 className='font-bold text-br-violet text-3xl mb-5 text-center'>Bolalar uchun qo'shiqlar</h2>
                <p className='text-lg text-center mb-5'>Ushbu sahifada bolalar uchun eng sara o'zbekcha va inglizcha qo'shiqlar: Kapalagim, kapalak, Jo'jalarim, Dadajon, Vatan, Bath song, Baby shark shu va shu kabi qo'shiqlar bilan tanishishingiz mumkin.</p>
                <Link className=' md:inline-flex bg-blue-200 px-5 py-2 rounded-md transition-all duration-300 hover:bg-green-300' to="qo'shiqlar">Sahifaga o'tish</Link>
              </div>
            </div>
          </div>
        </section>

        <section className='py-7 sm:py-10'>
          <div className='w-full max-w-7xl mx-auto px-5'>
            <div className='flex justify-between items-center flex-col-reverse md:flex-row'>
              <div className='w-full flex flex-col justify-center items-center md:w-1/2'>
                <h2 className='font-bold text-br-violet text-3xl mb-5 text-center'>Qiziqarli matematika</h2>
                <p className='text-lg text-center mb-5'>Ushbu sahifada bolalar uchun mo'ljallangan matematik amallar, qiziqarli boshqotirmalar va mental arifmetikaga doir videolar bilan tanishishingiz mumkin.</p>
                <Link className=' md:inline-flex bg-blue-200 px-5 py-2 rounded-md transition-all duration-300 hover:bg-green-300' to="matematika">Sahifaga o'tish</Link>
              </div>
              <div className='w-full grid grid-cols-2 gap-2 mb-8 md:mr-10 md:w-1/2'>
              <img className='w-full h-full' src={son} alt="sonlar" />
              <img className='w-full h-full' src={shakl} alt="shakllar" />
              <img className='w-full h-full' src={qoshish} alt="qo'shish" />
              <img className='w-full h-full' src={belgilar} alt="belgilar" />
              </div>
            </div>
          </div>
        </section>

        <section className='py-7 sm:py-10'>
          <div className='w-full max-w-7xl mx-auto px-5'>
            <div className='md:flex justify-between items-center'>
              <div className='w-full grid grid-cols-2 gap-2 mb-8 md:mr-10 md:w-1/2'>
              <img className='w-full h-full' src={alifbo} alt="alifbo" />
              <img className='w-full h-full' src={sonlar} alt="sonlar" />
              <img className='w-full h-full' src={ranglar} alt="ranglar" />
              <img className='w-full h-full' src={fasllar} alt="fasllar" />
              </div>
              <div className='w-full flex flex-col justify-center items-center md:w-1/2'>
                <h2 className='font-bold text-br-violet text-3xl mb-5 text-center'>Ingliz tili</h2>
                <p className='text-lg text-center mb-5'>Ushbu sahifada bolalar uchun mo'ljallangan ingliz tilidagi qiziqarli darslar bilan tanishishingiz mumkin. Sahifada ingliz tilidagi alifbo, sonlar, fasllar ranglar qanday aytilishi va shu kabi videolar joy olgan.</p>
                <Link className=' md:inline-flex bg-blue-200 px-5 py-2 rounded-md transition-all duration-300 hover:bg-green-300' to="ingliztili">Sahifaga o'tish</Link>
              </div>
            </div>
          </div>
        </section>
        <section className='py-7 sm:py-10'>
          <div className='w-full max-w-7xl mx-auto px-5'>
            <div className='md:flex-row flex justify-between items-center flex-col-reverse'>
              <div className='w-full flex flex-col justify-center items-center md:mr-10 md:w-1/2'>
                <h2 className='font-bold text-br-violet text-3xl mb-5 text-center'>Badantarbiya</h2>
                <p className='text-lg text-center mb-5'>Ushbu sahifada bolalar uchun mo'ljallangan har xil badantarbiya mashqlari joy olgan.</p>
                <Link className=' md:inline-flex bg-blue-200 px-5 py-2 rounded-md transition-all duration-300 hover:bg-green-300' to="badantarbiya">Sahifaga o'tish</Link>
              </div>
              <div className='w-full  mb-8 md:mr-10 md:w-1/2'>
              <img className='w-full h-full' src={badantarbiya} alt="badantarbiya" />
              </div>
            </div>
          </div>
        </section>
        <section className='py-7 sm:py-10'>
          <div className='w-full max-w-7xl mx-auto px-5'>
            <div className='md:flex justify-between items-center'>
              <div className='w-full grid grid-cols-2 gap-2 mb-8 md:mr-10 md:w-1/2'>
              <img className='w-full h-full' src={atirgul} alt="atirgul" />
              <img className='w-full h-full' src={soyabon} alt="soyabon" />
              <img className='w-full h-full' src={ayiqcha} alt="ayiqcha" />
              <img className='w-full h-full' src={ninachi} alt="ninachi" />
              </div>
              <div className='w-full flex flex-col justify-center items-center md:w-1/2'>
                <h2 className='font-bold text-br-violet text-3xl mb-5 text-center'>Rasm chizamiz</h2>
                <p className='text-lg text-center mb-5'>Ushbu sahifada bolalar uchun mo'ljallangan turli hil rasmlarni qanaday chizilishini o'rganamiz.</p>
                <Link className=' md:inline-flex bg-blue-200 px-5 py-2 rounded-md transition-all duration-300 hover:bg-green-300' to="rasm">Sahifaga o'tish</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-7 sm:py-10 bg-blue-100/30">
        <h2 className='text-2xl text-br-red font-bold text-center mb-10 sm:text-3xl md:mb-16 md:text-5xl'>Nimachun aynan biz</h2>
        <hr/>
        <ul className='grid w-full gap-y-5 gap-x-10 max-w-6xl px-5 mx-auto py-5 md:grid-cols-2 md:gap-y-10 md:gap-x-20'>
          <li className='w-full flex justify-center items-center md:justify-start'>
            <img className='w-20 h-20 mr-5 md:w-40 md:h-40' src={ayiq} alt="ayiq rasmi" />
            <p className='text-base text-center md:text-lg lg:text-xl'>Barcha videolar sifatli va tizimli joylangan</p>
          </li>
          <li className='w-full flex justify-center items-center md:justify-start'>
            <img className='w-20 h-20 mr-5 md:w-40 md:h-40' src={ukki} alt="ukki rasmi" />
            <p className='text-base text-center md:text-lg lg:text-xl'>Xohlagan va xohlagan payt ko'rish imkoniyati</p>
          </li>
          <li className='w-full flex justify-center items-center md:justify-start'>
            <img className='w-20 h-20 mr-5 md:w-40 md:h-40' src={sher} alt="sher rasmi" />
            <p className='text-base text-center md:text-lg lg:text-xl'>Barcha bolalar uchun foydali bo'lgan o'zbek, rus va ingliz tilidagi videolarni bir joyda tomosha qilish imkoniyati</p>
          </li>
          <li className='w-full flex justify-center items-center md:justify-start'>
            <img className='w-20 h-20 mr-5 md:w-40 md:h-40' src={bugi} alt="bug'i rasmi" />
            <p className='text-base text-center md:text-lg lg:text-xl'>Foydali bilimlardan tashqari, bolalar uchun miriqib multfilm va qoshiq tinglash imkoniyati</p>
          </li>
        </ul>

        </section>
      </main>
    </>

  )
}

export default Home