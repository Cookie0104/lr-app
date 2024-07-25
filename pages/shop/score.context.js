import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments } from '../../firebase';
import SHOP from '../../data/SHOP';

export const ScoreContext = createContext({
	products: [],
});

export const ScoreProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
    console.log("Shop", SHOP);
	useEffect(() => {
		addCollectionAndDocuments('score', SHOP);
	}, []);

	const value = { products };
	return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
}; 