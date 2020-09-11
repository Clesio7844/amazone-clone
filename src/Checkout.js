import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {

    const [{ basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout__ad"
                 src="https://amazon-presse.de/dam/jcr:1b13c05e-1f63-4e71-ae76-adfaf707b7ae/Amazon_Easter_Deals_Week_Banner_2018.jpg.jpg" 
                 style={{height: '100px', width: 'width: 100px'}}
                 alt=""/>
                 <div className="checkout__title">
                     <h2 >
                         Your shopping basket
                     </h2>


               
               {basket.map(item => (
                   <CheckoutProduct 
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating} 
                   />
               ))}

                
                 </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
                
            </div>
        </div>
    )
}

export default Checkout
