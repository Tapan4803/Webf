
import { useRouter } from 'next/router';

const Cart = () => {
    const router = useRouter();
    const { cartItems } = router.query;
    const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    };

    const totalPrice = parsedCartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Shopping Cart</h1>
            {parsedCartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <>
                    <ul style={styles.productList}>
                        {parsedCartItems.map((item, index) => (
                            <li key={index} style={styles.productItem}>
                                {item.title} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <p>Total Items: {parsedCartItems.length}</p>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                </>
            )}
            <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '50px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#f8f9fa',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    productList: {
        listStyleType: 'none',
        padding: 0,
    },
    productItem: {
        background: '#fff',
        margin: '10px 0',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    logoutButton: {
        display: 'block',
        width: '100%',
        padding: '10px 0',
        background: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
    },
};

export default Cart;














// import { useRouter } from 'next/router';

// const Cart = () => {
//     const router = useRouter();
//     const { cartItems } = router.query;

//     // Ensure that cartItems is properly parsed from JSON
   

//     const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];

//     console.log('Received cartItems in Cart:', parsedCartItems);
//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         router.push('/login'); // Adjust as necessary
//     };


//     if (!parsedCartItems || parsedCartItems.length === 0) {
//         return (
//             <div>
//                 <h1>Shopping Cart</h1>
//                 <p>No items in the cart.</p>
//             </div>
//         );
//     }

//     // Calculate total price
//     const totalPrice = parsedCartItems.reduce((acc, item) => acc + item.price, 0);

//     return (
//         <div>
//             <h1>Shopping Cart</h1>
//             <ul>
//                 {parsedCartItems.map((item, index) => (
//                     <li key={index}>{item.title} - {item.price}</li>
//                 ))}
//             </ul>
//             <p>Total Items: {parsedCartItems.length}</p>
//             <p>Total Price: ${totalPrice.toFixed(2)}</p>

//             <div> <button onClick={handleLogout}>Logout</button> </div>
//         </div>
      
//     );
// };

// export default Cart;