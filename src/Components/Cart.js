import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { IncQuantity, DecQuantity, deleteItem, getCartTotal , emptyCart} from '../ReduxSlices/CartSlice';

const Cart = () => {

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)
    const dispatch = useDispatch()
    const mydispatch = useDispatch()
    const seconddispatch = useDispatch()
    useEffect(() => {
        mydispatch(getCartTotal())
    }, [cart])

    const CheckOut = () => {
        if (totalQuantity == 0) {
            alert('Please Buy Some Product')
        } else{
            seconddispatch(emptyCart())
        }
    }

    return (
        <>
            <section className='h-[250vh] px-16 bg-gradient-to-r from-sky-400 to-blue-500 py-10'>
                <div className='py-4'>
                    <Link to='/products' >
                        <button className='py-2 px-3 bg-black text-white font-Poppins rounded-lg flex ite'> <ArrowBackRoundedIcon />Back To Home</button>
                    </Link>

                </div>

                <div className="wrapper flex justify-center gap-5">

                    <div className='flex flex-col space-y-8'>

                        {cart.map((cartItems) => {
                            return (
                                <>
                                    <div className="container w-[50rem] py-2 shadow-xl shadow-slate-800 bg-white rounded-3xl">
                                        <div className=" mx-auto flex flex-wrap">
                                            <img alt="ecommerce" className=" h-[22rem] w-[22rem] object-cover object-center rounded" src={cartItems.img} />

                                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                                <h2 className="text-sm title-font text-gray-500 tracking-widest font-Poppins">Smart Phone</h2>
                                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 font-Poppins">{cartItems.title}</h1>
                                                <div className="flex mb-4">
                                                    <span className="flex items-center">
                                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <span className="text-gray-600 ml-3">4 Reviews</span>
                                                    </span>

                                                </div>

                                                <p className="leading-relaxed font-Poppins">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.</p>
                                                <div className="flex mt-6 items-center pb-5 border-b-2 border-violet-700 mb-5">

                                                    <div className="flex ml-16 items-center">

                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-center w-[21rem]">

                                                    <div className='w-56  flex justify-between items-center'>
                                                        <span className="title-font font-medium text-2xl rounded-2xl text-gray-900">₹{cartItems.price}</span>
                                                        <p className='font-Poppins space-x-2'>
                                                            <span className='px-2 bg-white text-xl cursor-pointer' onClick={() => dispatch(DecQuantity(cartItems))}>-</span>
                                                            <span className='px-2 bg-slate-800 text-white text-xl'>{cartItems.quantity}</span>
                                                            <span onClick={() => dispatch(IncQuantity(cartItems))} className='px-2 bg-white text-xl cursor-pointer'>+</span>
                                                        </p>
                                                    </div>


                                                    <button onClick={() => dispatch(deleteItem(cartItems.id))} className="flex ml-auto text-white font-Poppins bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded"><DeleteIcon style={{ fontSize: '2rem' }} /></button>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })

                        }
                    </div>
                    {/* ///////////////  */}

                    <div className=" bg-white rounded-xl py-4 px-8 flex flex-col  w-[30rem] mt-10 h-[40vh] shadow-xl shadow-slate-600   ">
                        <div><p className='font-Poppins text-2xl text-center font-semibold'>Order Summary</p>
                            <div className="flex mt-2 items-center border-b-2 border-violet-700 mb-5">

                                <div className="flex ml-16 items-center">

                                </div>
                            </div>
                        </div>

                        <div className='space-y-2 pb-9 pt-10'>



                            <div className='flex justify-between px-1'> <p className='font-Poppins text-lg font-semibold'>Total Quantity:</p> <p className='font-Poppins text-xl'>{totalQuantity}</p></div>

                            <div className='flex justify-between px-1'> <p className='font-Poppins text-lg font-semibold'>Total Amount:</p> <p className='font-Poppins text-xl'>₹{totalPrice}</p></div>

                        </div>
                        <Link to='/aftercheckout' className='w-full flex justify-center'>

                            <button onClick={CheckOut} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-Poppins">CHECKOUT NOW !!</button>
                        </Link>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart