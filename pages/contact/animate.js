import { useLottie } from "lottie-react";
import LoadingLottie from "../../assets/lottie/loading.json"



const LottieAnimate = () =>{
    const Loading = {
        animationData: LoadingLottie,
        loop: true
    };
    const { View } = useLottie(Loading);
    
    return(
        <div>{ View }</div>
    )
}

export default LottieAnimate;