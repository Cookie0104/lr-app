import YTLINK from "../../data/YTLINK.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTube from "react-youtube";
import {Videobox} from "./music.style";
import "./slider.css"

export default function RwdYoutube() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: false,
    },
  };
  return (
    <Videobox>
      <Slider {...settings}>
        {YTLINK.map(({ link }) => {
          return (
              <YouTube videoId={link} opts={opts} />
          );
        })}
      </Slider>
      {/* {YTLINK.map(({ link }, index) => {
        //return (
          // <div class="ytyt">
          //   <iframe src={link} title={index} allowFullScreen="true" />
          // </div>
       // );
      })} */}
    </Videobox>

  );
  
}
