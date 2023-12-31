import React, { useContext, useEffect, useState } from 'react'
import './Nabvar.css'
import { useNavigate } from 'react-router-dom'
import AuthContext from './context/AuthContext';

const Navbar = () => {
    const [dropDown, setDropdown] = useState(false);
    const [dropUp, setDropUp] = useState(true)
    const {state, dispatch} = useContext(AuthContext);


    function open() {
        setDropdown(true)
        setDropUp(false)
    }
    function close() {
        setDropdown(false)
        setDropUp(true)
    }

    const router = useNavigate()
    function togo() {
        router('/Profile/')
    }
    function home() {
        router('/home')
    }
    function mensWear() {
        router('/Men')
    }
    function CartPage() {
        router('/Cartpage')
    }

    function Kitchen() {
        router('/Kitchen')
    }
    function Beauty() {
        router('/Beauty')
    }
    function gaudget() {
        router('/gaudget')
    }
    function kids() {
        router('/kids')
    }
    function women() {
        router('/women')
    }
    function  Jewellery(){
        router ('/Jewellery')
    }
    function Accessories(){
        router('/Accessories')
    }
    function Mywishlest(){
        router ('/Mywishlest')
    }
    function Allproducts(){
        router ('/all-products')
    }


    return (
        // <>

            <div id='navbar'>

                <div id='divfirst' onClick={home}>
                    <img src='https://coupontrends.in/img/1477323360_tatacliq.png' /> 

                </div>
                <div id='divsecond'>
                    <div id='text'>
                        <span>Tata Cliq Luxiary</span>

                        <p>Cilq Cash</p>
                        <p>Gift Card</p>
                        <p>Cliq Care </p>
                        <p>Track Order</p>
                  
                        
                        {state?.user?.role  == "Seller" &&<h4 onClick={() => router('/add-product')}>AddProduct</h4>}
                        {state?.user?.role == "Seller" && <h4 onClick={() => router('/your-product')}>YourProduct</h4>}
                        </div>
                  
                   
                    <div id='icon'>
                        <div id='child1' onMouseEnter={open} onMouseLeave={close}>
                            <p>Cetegries</p>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        {/* ********drop down******** */}
                        {dropDown && <div id='drop-down' onMouseEnter={open} onMouseLeave={close}>
                        <div className='women-fashion' onClick={Allproducts} >
                                <p>All Product</p>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>

                            <div className='women-fashion' onClick={women} >
                                <p>Women-Fashion</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={mensWear}>
                                <p>men-Fashion</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={kids}>
                                <p>Kid,s-Fashion</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={Kitchen}>
                                <p>Home-Kitchen</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={Beauty}>
                                <p>Beauty</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={ Jewellery}>
                                <p>Jewellery</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={gaudget}>
                                <p>Gadgets</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={Accessories} >
                                <p>Accessories</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>

                        </div>}


                        <div id='brand'>
                            <p>Brand</p>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div id='search'>
                            <div id='search1'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type='search' placeholder='search for cetegreis' />
                            </div>
                        </div>
                              <div className='bag-cart '>
                        <div id='bag'onClick={CartPage} >
                            <i class="fa-solid fa-bag-shopping"></i> </div>
                            <div onClick={Mywishlest} id='wish'> <i class="fa-regular fa-heart"></i></div>
                            <p  onClick={()=>router("/Login-Logout ")}>SignIn/SighUp</p>
                        <p onClick={() => dispatch({ type: "LOGOUT" })}>Logout</p>
                        <p onClick={()=>router("/Profile ")}>Profile</p>
                        </div>
                       </div>
                        </div>


            </div>

        // </>
    )
}

export default Navbar

