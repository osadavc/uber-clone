import tw from "tailwind-styled-components";
import { carList } from "../utils/carList";

const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>$24.00</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

const Wrapper = tw.div`
	flex-1
	overflow-y-scroll
`;

const Title = tw.h3`
 text-gray-500
 text-center
 text-xs
 py-2
 border-b
`;

const CarList = tw.div`
	overflow-y-scroll
`;

const Car = tw.div`
	flex
	items-center
	p-4
`;

const CarImage = tw.img`
	h-14
	mr-4
`;

const CarDetails = tw.div`
	flex-1
`;

const Service = tw.h4`
	font-medium 
`;

const Time = tw.h5`
	text-xs
	text-blue-500
`;

const Price = tw.h6`

`;

export default RideSelector;
