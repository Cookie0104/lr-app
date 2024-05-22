import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
	return  [...cartItems, productToAdd];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	// find the cart item to remove
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

	// check if quantity is equal to 1, if  it's remove that item from the cart
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	// return back cartItems with matching cart item with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

export const CartContext = createContext({
	isCartsOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartsOpen, setIsCartOpen] = useState(false);
    const [isItemExist, setisItemExist] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);
	
	useEffect(() => {
		const newCartCount = cartItems.reduce((total) => total + 1, 0);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		//將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。
		const newCartTotal = cartItems.reduce(
			(total, cartItem) => (+cartItem.price) + total,
			0
		);
		setCartTotal(newCartTotal);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

    const checkIfItemExist = (productToAdd) =>{
        const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
        if (existingCartItem){
            setisItemExist(true);
        }else{
			setisItemExist(false);
		}
    }

	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const clearItemFromCart = () => {
		setCartItems([]);
	};

	const value = {
		//已輸出
		isCartsOpen,
		setIsCartOpen,
        isItemExist,
        setisItemExist,
		cartItems,
		addItemToCart,
        checkIfItemExist,
		removeItemFromCart,
		clearItemFromCart,
		cartCount,
		cartTotal,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};