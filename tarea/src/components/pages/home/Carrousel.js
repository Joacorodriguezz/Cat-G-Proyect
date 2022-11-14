import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/nTZSzJ-cdhA/maxresdefault.jpg"
          alt="First slide"
          height='720'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/E7WXCNCRYFDO7HUYBWCCGWWD6Q.jpg"
          alt="Second slide"
          height='720'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.api.playstation.com/vulcan/ap/rnd/202210/2019/S8KTmZMvemfR8yfAqHvLpGIP.jpg"
          alt="Third slide"
          height='720'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;