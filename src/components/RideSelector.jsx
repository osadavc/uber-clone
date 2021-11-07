import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import axios from "axios";
import { carList } from "../utils/carList";

const RideSelector = ({ locationData }) => {
  const [rideDuration, setRideDuration] = useState(0);

  // c-spell:disable
  const MAP_BOX_API_KEY =
    "pk.eyJ1Ijoib3NhZGF0aGVjb2RlciIsImEiOiJja3Zsbzc4dDc5N2RyMnVzN3l5eDE2Y2xsIn0.Yi-PSKvQzgFU7sQAIcwzKA";
  // c-spell:enable

  useEffect(() => {
    if (locationData?.pickup && locationData?.drop) {
      axios
        .get(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${locationData?.pickup?.coordinates[0]},${locationData?.pickup?.coordinates[1]};${locationData?.drop?.coordinates[0]},${locationData?.drop?.coordinates[1]}?access_token=${MAP_BOX_API_KEY}`
        )
        .then((response) => {
          setRideDuration(response?.data?.routes[0]?.duration / 100);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [locationData]);

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
            <Price>${(rideDuration * car.multiplier).toFixed(2)}</Price>
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
