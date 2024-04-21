
import Title from "../../components/title.js"
import Footer from "../../components/footer.js"
import { Search } from "../../assets/index.js";
import SHOP from "../../data/SHOP.json";
import Scorepage from "./Shop-inner.page.js";
import {
    ScoreImg,
    ScoreOuter,
    ScoreInner,
    ScoreInfoOuter,
    Price,
    Name,
    Introduction,
    TagOuter,
    TagStyle,
    SelectStyle,
    SearchIcon,
    SeachBar,
    Sorting,
    SearchArea,
    SearchOuter,
    ShopInner,
    ShopOuter
  } from './shop.style.js';


function ShowTag ({scoreTag}){
    return(
        <TagStyle>{scoreTag}</TagStyle>
    )
}

function ShowScore({name,image,price,introduction,tag}){
    const scoreTag = Object.values(tag);
    return (
            <ScoreInner>
                <ScoreImg src={image} alt="123" />
                <ScoreInfoOuter>
                    <Price>$ {price}</Price>
                    <Name>{name}</Name>
                    <Introduction>{introduction}</Introduction>
                
                    <TagOuter>
                        {scoreTag.map((scoreTag) => <ShowTag scoreTag={scoreTag}/>)}
                    </TagOuter>
                </ScoreInfoOuter>
            </ScoreInner>
    )
    };


    
function Shop() {

    // constructor() {
    //     this.state = {
    //         score: [],
    //         searchField: '',
    //     };
    // };
    
    // onSearchChange = (event) => {
    //     const searchField = event.target.value.toLocaleLowerCase();
    //     this.setState(() => {
    //         return { searchField };
    //     });
    // };

    // const { score, searchField } = this.state;
    // const { onSearchChange } = this;
    // const filteredScore = score.filter((score) => {
    //     return score.name.toLocaleLowerCase().includes(searchField);
    // });
    
    return (
        <>  
            <ShopOuter>
                
                <Title title="STORE" />
                <ShopInner>
                    <SearchOuter>
                        <SearchArea>
                            <SeachBar 
                                // type="search" 
                                // onChangeHandler={onSearchChange} 
                                placeholder="輸入關鍵字">
                            </SeachBar>
                            <SearchIcon>
                                <img src={Search} alt="search" />
                            </SearchIcon>
                        </SearchArea>
                        <Sorting>
                            <div>排序：</div>
                            <SelectStyle>
                                <option selected value="price">價格由低至高</option>
                                <option value="price">價格由高至低</option>
                                <option value="grade">難易度由低至高</option>
                                <option value="grade">難易度由高至低</option>
                            </SelectStyle>
                        </Sorting>
                    </SearchOuter>
                    <ScoreOuter>
                        {SHOP.map(({ name,image,price,introduction,tag }) => <ShowScore name={name} image={image} price={price} introduction={introduction} tag={tag}/>)}
                    </ScoreOuter>
                </ShopInner>
                <Scorepage/>
            </ShopOuter>
            <Footer />
        </>
    );
}

export default Shop ;

