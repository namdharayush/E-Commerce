import React from 'react';
import { useCartContext } from '../Context/CartContext';
import { useProductContext } from '../Context/ProductContext';

const Text = () => {

    const { singleProduct} = useProductContext()
    return (
        <>
            <div className='welcome_text'>
                <h1>Thanks For Purchase this <span className='text-danger'>{singleProduct[0].mobilename}</span></h1>
            </div>
        </>
    );
}

export default Text;
