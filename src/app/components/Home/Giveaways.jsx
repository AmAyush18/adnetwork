'use client'
import Image from 'next/image'
import React from 'react'

import tombRaider from '../../../../public/assets-compressed/adnetwork-10.jpg'
import forzaSeries from '../../../../public/assets-compressed/adnetwork-1.png'
import deathStranding from '../../../../public/assets-compressed/adnetwork-3.jpg'
import { Divider } from '@nextui-org/react'
import { styles } from '@/app/utils/styles'

function Giveaways() {
  return (
    <div className='w-[100vw] flex flex-col justify-center items-center'>
        <div className="h-[10vh] w-[100vw] flex flex-col justify-center bg-black">
            <h1 className='text-center text-4xl m-auto sm:text-3xl uppercase'>Enter Exciting Giveaways and Vouchers</h1>
        </div>
        <div className="w-[100vw] flex flex-col items-center m-auto pt-6">
            <div className='flex flex-col 1100px:flex-row w-[90%] m-auto justify-center mt-4 gap-6'>
                <div className="w-[28%] bg-transparent relative overflow-hidden rounded-lg shadow-md mb-5 border border-slate-50">
                    <Image src={tombRaider} alt={'tomb raider'} width={200} height={300} className="w-[100%] h-[100%] object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-lg font-bold">Tomb Raider</p>
                    </div>
                </div>
                <div className="w-[28%] bg-transparent relative overflow-hidden rounded-lg shadow-md mb-5 border border-slate-50">
                    <Image src={forzaSeries} alt={'tomb raider'} width={200} height={300} className="w-[100%] h-[100%] object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-lg font-bold">Forza Series</p>
                    </div>
                </div>
                <div className="w-[28%] bg-transparent relative overflow-hidden rounded-lg shadow-md mb-5 border border-slate-50">
                    <Image src={deathStranding} alt={'tomb raider'} width={200} height={300} className="w-[100%] h-[100%] object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-lg font-bold">Death Stranding</p>
                    </div>
                </div>
            </div>

            <Divider className='w-[90%] bg-slate-50 mt-5 1100px:mt-7 h-[0.5px] mb-5'/>

            <div className="mt-5 w-[100%] mb-9 flex flex-col items-center flex-wrap">
                <span className='w-[90%] uppercase text-center mb-1 text-3xl text-[#0C749B]' style={{ fontWeight: 'bold'}}> Want to stay updated with Ad network? </span>
                <span className='w-[90%] uppercase text-center mb-3 text-3xl text-[#0C749B]' style={{ fontWeight: 'bold'}}> Sign up now! </span>
            </div>

            <div className="w-[90%] flex flex-wrap gap-2 justify-center mb-10">
                <input 
                    type="text" 
                    placeholder='example@email.com'
                    className={`bg-transparent w-[30vw] text-white py-1 px-4 border-slate-50 border-small rounded-none text-lg`}
                />
                <button className={styles.button}>
                    Stay Updated
                </button>
            </div>

        </div>
    </div>
  )
}

export default Giveaways