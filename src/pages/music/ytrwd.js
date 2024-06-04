import styled from "styled-components";
import YTLINK from "../../data/YTLINK.json";
import Slider from "react-slick";

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
  return (
    <Slider {...settings}>
      <Videobox>
        {YTLINK.map((vidio) => {
          return <iframe src={vidio.link} allowFullScreen="true" />;
        })}
      </Videobox>
    </Slider>
  );
}

const Videobox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & iframe {
    top: 0;
    left: 0;
    width: calc(55vh / 9 * 16);
    max-width: 80vw;
    height: 55vh;
    max-height: calc(80vw / 16 * 9);
    z-index: 2;
  }
`;
