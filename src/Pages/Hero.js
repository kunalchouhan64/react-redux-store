import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section className='h-[100vh] flex justify-center items-center gap-9 '>
                <div className="info space-y-3">
                    <p className='font-Poppins text-base text-red-700 font-bold'>E SHOPPY'S SPECIAL</p>
                    <h2 className='font-Poppins text-6xl w-[30rem] font-semibold text-black'>Latest Smart Phones Every Day</h2>
                    <p className='font-Poppins min-w-72'>In Our Store You'll Get Latest Deals About Smart Phones with Best Prices.</p>
                    <div className='pt-3'>
                        <Link to='/products'>
                            <button className='py-4 px-6 shadow-2xl shadow-black rounded-xl bg-black text-white font-Poppins'>Explore Products</button>
                        </Link>

                    </div>
                </div>
                <div className="img">
                    <img className='h-[40rem]' src="\Images\heroimg3.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default Hero