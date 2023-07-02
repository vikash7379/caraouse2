import Carousel, { CarouselItem } from "./Carousel";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem>
          <img
            src="https://images2.alphacoders.com/679/6792.png"
            alt="landscape"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://images.alphacoders.com/642/64293.jpg"
            alt="landscape"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://images2.alphacoders.com/102/102970.jpg"
            alt="landscape"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://images4.alphacoders.com/632/632636.jpg"
            alt="landscape"
          />
        </CarouselItem>
      </Carousel>
    </div>
  );
}
