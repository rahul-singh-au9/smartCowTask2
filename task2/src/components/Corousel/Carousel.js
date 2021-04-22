import Carousel from "nuka-carousel";

const img1 =
  "https://images.pexels.com/photos/1031641/pexels-photo-1031641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const img2 =
  "https://images.pexels.com/photos/696644/pexels-photo-696644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const img3 =
  "https://images.pexels.com/photos/1252814/pexels-photo-1252814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const CarouselComp = () => {
  return (
    <Carousel
      style={{
        height: "400px",
        width: "950px",
        marginLeft: "210px",
        marginTop: "30px",
      }}
    >
      <img src={img1} alt="pic" />
      <img src={img2} alt="pic" />
      <img src={img3} alt="pic" />
    </Carousel>
  );
};

export default CarouselComp;
