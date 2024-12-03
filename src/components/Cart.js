export default function Cart({cart,total}) {
    
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                {
                 cart.map((item,index)=>{
                    return(
                        <tr key = {index}>
                            <td>{item.product}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    )
                 })   
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>{total}</td>
                </tr>
            </table>
           
        </div>
    );
}