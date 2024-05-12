import {useState , useEffect} from "react";
import Title from "../../components/title.js"
import Footer from "../../components/footer.js"
import { Search } from "../../assets/index.js";
import SHOP from "../../data/SHOP.json";
import {
    SelectStyle,
    SearchIcon,
    SeachBar,
    Sorting,
    SearchArea,
    SearchOuter,
    ShopInner,
    ShopOuter,
    EmptyOuter
  } from './shop.style.js';
import ScoreList from "./score-list.js";

    
function Shop() {
    const [searchField, setSearchField] = useState('');
    const [selectField, setSelectField] = useState('');
    const [scores, setScores] = useState(SHOP);
    const [filteredScores, setFilteredScores] = useState(scores);
    const [hasScore, setHasScore] = useState(true);

    useEffect(() => {
		fetch("../../data/SHOP.json")
			.then((response) => response.json())
			.then((name) => setScores(name));
	}, []);

	// useEffect(() => {
	// 	let newFilteredScores = scores.filter((score) => {
	// 		return score.name.toLocaleLowerCase().includes(searchField);
	// 	});
	// 	setFilteredScores(newFilteredScores);
    //     if(newFilteredScores.length === 0){
    //         setHasScore(false);
    //     }else{
    //         setHasScore(true);
    //     };

	// }, [scores, searchField]);

    useEffect(() => {
		let updatedScores = scores.filter((score) =>
			score.name.toLocaleLowerCase().includes(searchField)
		);
		switch (selectField) {
			case 'gradeUp':
				updatedScores.sort((a, b) => a.grade - b.grade);
				break;
			case 'gradeDown':
				updatedScores.sort((a, b) => b.grade - a.grade);
				break;
			case 'priceUp':
				updatedScores.sort((a, b) => a.price - b.price);
				break;
			case 'priceDown':
				updatedScores.sort((a, b) => b.price - a.price);
				break;
			default:
				break;
		}
		setFilteredScores(updatedScores);
		setHasScore(updatedScores.length > 0);
	}, [scores, searchField, selectField]); //[裡面是啥意思]何時該用useEffect

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

    const onSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectField(selectedValue);       
	};

    // useEffect(() => {
    //     console.log("目前排序",selectField);
    //     if(selectField === "gradeUp"){
    //         const gradeUpArr = scores.sort((a, b) => (a.grade) - (b.grade));
    //         setFilteredScores(gradeUpArr);
    //         console.log("gradeUpArr",gradeUpArr);
    //     }else if(selectField === "gradeDown"){
    //         const gradeDownArr = scores.sort((a, b) => (b.grade) - (a.grade));
    //         setFilteredScores(gradeDownArr);
    //         console.log("gradeDownArr",gradeDownArr);
    //     }else if(selectField === "priceUp"){
    //         const priceUpArr = scores.sort((a, b) => (a.price) - (b.price));
    //         setFilteredScores(priceUpArr);
    //         console.log("priceUpArr",priceUpArr);
    //     }else if(selectField === "priceDown"){
    //         const priceDownArr = scores.sort((a, b) => (b.price) - (a.price));
    //         setFilteredScores(priceDownArr);
    //         console.log("priceDownArr",priceDownArr);
    //     };
	// }, [scores, selectField]);

    
    
    

    

    return (
        <>  
            <ShopOuter>
                <Title title="STORE" />
                <ShopInner>
                    <SearchOuter>
                        <SearchArea>
                            <SeachBar 
                                type="search" 
                                onChange={onSearchChange} 
                                placeholder="輸入關鍵字">
                            </SeachBar>
                            <SearchIcon>
                                <img src={Search} alt="search" />
                            </SearchIcon>
                        </SearchArea>
                        <Sorting>
                            <div>排序：</div>
                            <SelectStyle id="sortSelected" onChange={onSelectChange}>
                                <option selected value="priceUp">價格由低至高</option>
                                <option value="priceDown">價格由高至低</option>
                                <option value="gradeUp">難易度由低至高</option>
                                <option value="gradeDown">難易度由高至低</option>
                            </SelectStyle>
                        </Sorting>
                    </SearchOuter>
                    <ScoreList scores={filteredScores}/>
                    {!hasScore && 
                     <EmptyOuter>查無曲目</EmptyOuter>
                    } 
                </ShopInner> 
            </ShopOuter>
            <Footer />
        </>
    );
}

export default Shop ;

