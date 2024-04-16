import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

const Home = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    const fetchItems = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Welcome to Web422 Store</h1>
            <div style={styles.productsGrid}>
                {items.map((item) => (
                    <div key={item.id} style={styles.productCard}>
                        <h2 style={styles.productTitle}>{item.title}</h2>
                        <p>${item.price}</p>
                        <button style={styles.button} onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <Link style={styles.cartLink} href={{ pathname: '/cart', query: { cartItems: JSON.stringify(cartItems) } }} passHref>
             View Cart ({cartItems.length})
            </Link>
            <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: 'auto',
    },
    header: {
        textAlign: 'center',
        marginBottom: '40px',
        color: '#496989',
    },
    productsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
    },
    productCard: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '20px',
        borderRadius: '5px',
        backgroundColor: '#fff',
    },
    productTitle: {
        fontSize: '1rem',
        color: '#58A399',
    },
    button: {
        background: '#496989',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    cartLink: {
        display: 'block',
        marginTop: '20px',
        textAlign: 'center',
        background: '#28a745',
        color: '#fff',
        padding: '10px 15px',
        textDecoration: 'none',
        borderRadius: '5px',
    },
    logoutButton: {
        display: 'block',
        width: '100px',
        margin: '20px auto',
        background: '#dc3545',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Home;








// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import axios from 'axios';
// import { useRouter } from 'next/router';


// const Home = () => {
//         const [items, setItems] = useState([]);
//         const [cartItems, setCartItems] = useState([]);


//     const router = useRouter();

//     // Add this useEffect hook inside your Home component
// useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//         router.push('/login');
//     }
// }, [router]);

    
//         const fetchItems = async () => {
//             try {
//                 const response = await axios.get('https://fakestoreapi.com/products');
//                 setItems(response.data);
//             } catch (error) {
//                 console.error('Error fetching items:', error);
//             }
//         };
    
//         useEffect(() => {
//             fetchItems();
//         }, []);
    
//         const addToCart = (item) => {
//                console.log('Adding item to cart:', item);
//         setCartItems([...cartItems, item]);
//         console.log('cartItems:', cartItems); // Log the cartItems state afte
//         };

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         router.push('/login'); // Adjust as necessary
//     };

    
//         console.log('cartItems in Home:', cartItems);

    
//         return (
//             <div className="container">
//                 <h1>Welcome to Web422 Store</h1>
//                 <ul>
//                     {items.map((item) => (
//                         <li key={item.id}>
//                             {item.title} - {item.price}
//                             <button onClick={() => addToCart(item)}>Add to Cart</button>
//                         </li>
//                     ))}
//                 </ul>
//     <Link href={{ pathname: '/cart', query: { cartItems: JSON.stringify(cartItems) } }} passHref>
//     View Cart ({cartItems.length})
// </Link>
// <div> 
// <button onClick={handleLogout}>Logout</button>
// </div>
//             </div>
//         );
    

//     };
    


//     export default Home;