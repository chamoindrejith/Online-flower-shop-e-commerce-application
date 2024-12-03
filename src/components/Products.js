import { useState } from 'react';
import '../assets/CSS/layout.css';
import Product from './Product';
import { flowers } from './FlowerDB';
import Cart from './Cart';


export default function Products(){
   const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        flowers.map((flower,index)=>{
                            return(
                                <Product
                                key={index}
                                product = {flower}
                                setCart = {setCart}
                                setTotal = {setTotal}
                                />

                            )
                        })
                    }
                </div>

            </div>
            <div className="item3">
                <Cart cart={cart} total={total}/>
            </div>
        </>
    );

}