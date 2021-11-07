import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import RideSelector from "../components/RideSelector";
import ArrowLeft from "../components/icons/ArrowLeft";

const Confirm = () => {
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    setLocationData(JSON.parse(localStorage.getItem("locations")));
  }, []);

  const Router = useRouter();

  return (
    <Wrapper>
      <ArrowContainer
        onClick={() => {
          Router.back();
          localStorage.clear();
        }}
      >
        <ArrowLeft />
      </ArrowContainer>
      <Map locationData={locationData} />
      <RideContainer>
        <RideSelector locationData={locationData} />
        <ConfirmButton>Confirm UberX</ConfirmButton>
      </RideContainer>
    </Wrapper>
  );
};

const Wrapper = tw.div`
	flex
	flex-col
	h-screen
  relative
`;

const RideContainer = tw.div`
  flex
	flex-1
  flex-col
  h-[55%]
`;

const ConfirmButton = tw.button`
	bg-black
  text-white
  mt-2
  py-3
  rounded-md
  focus:ring-2
  focus:ring-offset-2
  focus:ring-black
  text-lg
  mx-4
  mb-4
`;

const ArrowContainer = tw.div`
  bg-white
  w-10
  h-10
  absolute
  z-50
  inset-4
  flex
  justify-center
  items-center
  rounded-full
  cursor-pointer
`;

export default Confirm;
