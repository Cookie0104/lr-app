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
    const [scores, setScores] = useState(SHOP);
    const [filteredScores, setFilteredScores] = useState(scores);
    const [hasScore, setHasScore] = useState(true);

    useEffect(() => {
		fetch("../../data/SHOP.json")
			.then((response) => response.json())
			.then((name) => setScores(name));
	}, []);

	useEffect(() => {
		const newFilteredScores = scores.filter((score) => {
			return score.name.toLocaleLowerCase().includes(searchField);
		});
		setFilteredScores(newFilteredScores);
        console.log(newFilteredScores.length);
        
        if(newFilteredScores.length === 0){
            setHasScore(false);
        }else{
            setHasScore(true);
        };

	}, [scores, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

    const onSelectChange = (event) => {
        
	};

    

    

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
                            <SelectStyle onSelect={onSelectChange}>
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

