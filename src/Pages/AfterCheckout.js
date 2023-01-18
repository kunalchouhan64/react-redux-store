import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Link } from 'react-router-dom';

const AfterCheckout = () => {
    return (
        <div className='h-[90vh] flex flex-col justify-center items-center bg-gradient-to-r from-lime-400 to-yellow-300'>
            <p className='font-Poppins pb-2 py-2 px-5 border border-black rounded-2xl'>Your Order <CardGiftcardIcon /> Has Been Shipped <LocalShippingIcon /> To Your Address Within 2-7 Working Days.</p>

            <div className='space-y-5 pt-6'>

                <h1 className='font-Poppins text-5xl w-[8em] text-center'>Thank You For Purshasing With Us.</h1>
                <div className='flex justify-center'><HandshakeIcon style={{ fontSize: '4rem' }} /></div>
                <div className='flex justify-between'>
                    <Link to='/'>
                        <button className='border-2 hover:bg-black hover:text-white delay-100 ease-in-out border-black py-2 px-5 font-Poppins text-lg text-black rounded-xl'>Go To Home</button>
                    </Link>
                    <Link to='/products'>
                        <button className='border-2 hover:bg-black hover:text-white delay-100 ease-in-out border-black py-2 px-5 font-Poppins text-lg text-black rounded-xl'>Go To Products</button>
                    </Link>


                </div>

            </div>
        </div>
    )
}

export default AfterCheckout