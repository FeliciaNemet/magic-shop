import React from "react";
import './Header.scss';
import {Link} from 'react-router-dom';
import headerLogo from '../../assets/images/logos/HogwartsLogo.png';
import blackCart from '../../assets/images/icons/black-cart.svg';

const Header = () => {

    const [open, setOpen ] = React.useState(false);
    // const {shoppingCart} = useContext(MyContext);

    // // const amountInCart = shoppingCart.length > 0 ? shoppingCart.length : 0;
    // const amountInCart = shoppingCart.reduce((total, item) => total + item.quantity, 0);


    return (
        <>
        
            <header className="header">
                <nav className='header__nav'>
                    <Link to='/'>
                    <img className="header__logo" src={headerLogo} alt="LiteRails Logo in White"/>
                    </Link>
                    <ul className='header__list'>
                    <Link  to='/quiz' className='header__list-item--wrapper'>
                        <li className='header__list-item'>Quiz</li>
                    </Link>
                    <Link to='/' className='header__list-item--wrapper'>
                        <li className='header__list-item'>Home</li>
                    </Link>
                    <Link to='/shop' className='header__list-item--wrapper'>
                        <li className='header__list-item'>Shop</li>
                    </Link>
                    <Link to='/cart' className='header__list-item--wrapper'>
                        <li className='header__list-item'>
                            <img className='header__list-item--image' src={blackCart} alt="Shopping Cart Icon in Black"/>
                            {/* <span>{amountInCart}</span> */}
                        </li>
                    </Link>
                    </ul>
                    {/* <div className='header__hamburger-wrapper'>
                        <img className='header__hamburger' src={menu} alt="dropdown menu button for mobile view" onClick={() => setOpen(true)} />
                        <MenuModal open={open} onClose={()=> setOpen(false)} 
                        amountInCart={amountInCart}
                    
                         />
                    </div> */}
                </nav>
            </header>
        </>
    )
}

export default Header;