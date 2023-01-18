import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { getCartTotal } from '../ReduxSlices/CartSlice';

const Navbar = () => {
    const { cart, totalQuantity } = useSelector((state) => state.allCart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    return (
        <>
            <div className='py-1 xs:overflow-hidden shadow-lg shadow-orange-500 flex justify-evenly items-center'>
                <Link to='/'>
                <div className="logo font-Poppins text-xl font-semibold"> E Shoppy</div>
                </Link>
                <div className="menu space-x-8 font-Poppins text-lg">
                    < Link className='font-semibold' to='/'>Home</Link>
                    < Link to='/products' >Products</Link>
                    < Link to='/cart' >Cart</Link>
                </div>
                <Badge className='font-Poppins text-3xl py-3' >
                    <div className="cart font-Poppins text-lg space-x-2 flex" id='cart'>
                        <Link to='/cart' badgeContent={totalQuantity}>
                            <ShoppingCartIcon style={{ fontSize: '2.4rem', color: 'orangered', cursor: 'pointer' }} />
                        </Link>
                        <p>({totalQuantity})</p>
                    </div>
                    {/* <p>Cart {totalQuantity}</p> */}
                </Badge>
            </div>
        </>
    )
}

export default Navbar