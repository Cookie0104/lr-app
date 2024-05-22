import {
    Grade
} from "../pages/shop/shop-inner.page/shop-inner.page.style"

const Star = ({ n }) => {
	// 設定基礎星星數量
	const basic = 5;
	// 生成綠色星星的元素
	const greenStars = Array.from({ length: n }, (_, index) => (
		<div
			key={`green-${index}`}
			className="greenstar"
		></div>
	));
	// 生成灰色星星的元素，數量為基礎數量減去綠色星星的數量
	const grayStars = Array.from({ length: basic - n }, (_, index) => (
		<div
			key={`gray-${index}`}
			className="graystar"
		></div>
	));
	return (
		<Grade id="starOuter">
			{greenStars}
			{grayStars}
		</Grade>
	);
};

export default Star ;

 //星星數量
  // window.onload = function() {
  //     printStar(thisData.grade);
  // };
  // function printStar(n) {
  //     let result = "";
  //     for (let i = 1; i <= n; i += 1) {
  //         result += "<div class='greenstar'></div>";
  //     }
  //     let graystar = (5 - n);
  //     for(let j = 1 ; j <= graystar ; j += 1){
  //         result += "<div class='graystar'></div>";
  //     }
  //     document.getElementById("starOuter").innerHTML = result;
  // }