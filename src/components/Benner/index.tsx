import { Slide } from 'react-slideshow-image';
import { EachSlide } from './styles';

export function Banner() {
  return (
    <Slide easing="ease">
      <EachSlide>
        <div
          style={{
            backgroundImage: `url(./assets/img/slide_01.jpg)`,
          }}
        >
          <span className="text-1">best offer</span>
          <span className="text-2">new arrivals on sale</span>
        </div>
      </EachSlide>
      <EachSlide>
        <div
          style={{
            backgroundImage: `url(./assets/img/slide_02.jpg)`,
          }}
        >
          <span className="text-1">Flash Deals</span>
          <span className="text-2">Get your best products</span>
        </div>
      </EachSlide>
      <EachSlide>
        <div
          style={{
            backgroundImage: `url(./assets/img/slide_03.jpg)`,
          }}
        >
          <span className="text-1">Last Minute</span>
          <span className="text-2">Grab last minute deals</span>
        </div>
      </EachSlide>
    </Slide>
  );
}
