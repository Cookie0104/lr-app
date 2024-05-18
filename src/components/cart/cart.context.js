import { createContext, useState, useEffect } from 'react';


const addCartItem = (cartItems, productToAdd) => {
	// find if cartItem contains productToAdd
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
	// if found, increment quantity
	if (existingCartItem)
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	// return new array with modified cartItems / new cart item
	return [...cartItems, { ...productToAdd, quantity: 1 }];
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
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
        //將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。
		const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.length, 
            0
        );
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newCartTotal = cartItems.reduce(
			(total, cartItem) => cartItem.price + total,
			0
		);
		setCartTotal(newCartTotal);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	// const removeItemFromCart = (cartItemToRemove) => {
	// 	setCartItems(removeCartItem(cartItems, cartItemToRemove));
	// };

	// const clearItemFromCart = (cartItemToClear) => {
	// 	setCartItems(clearCartItem(cartItems, cartItemToClear));
	// };

	const value = {
		isCartsOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		// removeItemFromCart,
		// clearItemFromCart,
		cartCount,
		cartTotal,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};