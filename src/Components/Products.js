import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../ReduxSlices/CartSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {

    const items = useSelector((state) => state.allCart.items)
    const dispatch = useDispatch()
    const notify = () => toast.success(' Product Added... ChekOut Cart', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    });

    return (

        <>
            <section className='h-[145vh] bg-gradient-to-l py-12 px-44 flex justify-center flex-col '>
                <ToastContainer
                    position="top-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
                <div className='font-Poppins text-center py-12 text-4xl'>
                    <h1 className='font-Poppins pb-2 py-2 px-5 border border-orange-400 rounded-2xl'>Our Latest Products</h1>
                </div>
                <div className="grid grid-cols-3 gap-12">

                    {items.map((product) => {
                        return (
                            <>

                                <div className="border shadow-xl hoverclass  border-black shadow-slate-900 rounded-xl h-96 w-80" key={product.id}>
                                    <div className='flex p-5 space-y-1 justify-center flex-col items-start'>
                                        <img className='h-60' src={product.img} alt="" />
                                        <p className='font-Poppins text-xl'>{product.title}</p>
                                        <p className='font-Poppins'> <span className='font-semibold'>Price:</span>  ₹{product.price}</p>
                                        <button onClick={() => { dispatch(addToCart(product)); notify() }} className='py-2 px-3 rounded-lg bg-black text-white font-Poppins border border-white hover:bg-white hover:text-black'>Add To Cart</button>
                                    </div>
                                </div>
                            </>
                        )
                    })

                    }


                </div>



            </section>
        </>
    )
}

export default Products