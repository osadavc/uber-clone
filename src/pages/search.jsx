import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import ArrowLeft from "../components/icons/ArrowLeft";
import axios from "axios";

const Search = () => {
  const Router = useRouter();

  const [pickup, setPickup] = useState({
    value: "",
    list: [],
    isFocused: false,
  });

  const [drop, setDrop] = useState({
    value: "",
    list: [],
    isFocused: false,
  });

  const goBack = () => {
    Router.back();
  };

  // c-spell:disable
  const MAP_BOX_API_KEY =
    "pk.eyJ1Ijoib3NhZGF0aGVjb2RlciIsImEiOiJja3Zsbzc4dDc5N2RyMnVzN3l5eDE2Y2xsIn0.Yi-PSKvQzgFU7sQAIcwzKA";
  // c-spell:enable

  useEffect(() => {
    if (pickup.value) {
      axios
        .get(getMapBoxURL(pickup.value))
        .then((response) => {
          setPickup((prevPickup) => ({
            ...prevPickup,
            list: response.data.features.map((item) => item.place_name),
          }));
        })
        .catch((err) => console.log(err));
    } else {
      setPickup((prevPickup) => ({ ...prevPickup, list: [] }));
    }
  }, [pickup.value]);

  useEffect(() => {
    if (drop.value) {
      axios
        .get(getMapBoxURL(drop.value))
        .then((response) => {
          setDrop((prevDrop) => ({
            ...prevDrop,
            list: response.data.features.map((item) => item.place_name),
          }));
        })
        .catch((err) => console.log(err));
    } else {
      setDrop((prevDrop) => ({ ...prevDrop, list: [] }));
    }
  }, [drop.value]);

  const getMapBoxURL = (input) =>
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?worldview=cn&access_token=${MAP_BOX_API_KEY}`;

  return (
    <Wrapper>
      <ButtonContainer onClick={goBack}>
        <ArrowLeft />
      </ButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>

        <InputBoxes>
          <div className="relative w-full">
            <Input
              placeholder="Enter Pickup Location"
              value={pickup.value}
              onChange={(e) =>
                setPickup((prevPickup) => ({
                  ...prevPickup,
                  value: e.target.value,
                }))
              }
              onFocus={() =>
                setPickup((prevPickup) => ({ ...prevPickup, isFocused: true }))
              }
            />
            <SearchSuggestions
              list={pickup}
              setState={(item) => {
                setPickup((prevPickup) => ({
                  ...prevPickup,
                  value: item,
                  isFocused: false,
                }));
              }}
            />
          </div>
          <div className="relative w-full">
            <Input
              placeholder="Where To ?"
              value={drop.value}
              onChange={(e) =>
                setDrop((prevDrop) => ({ ...prevDrop, value: e.target.value }))
              }
              onFocus={() =>
                setDrop((prevDrop) => ({ ...prevDrop, isFocused: true }))
              }
            />
            <SearchSuggestions
              list={drop}
              setState={(item) => {
                setDrop((prevDrop) => ({
                  ...prevDrop,
                  value: item,
                  isFocused: false,
                }));
              }}
            />
          </div>
        </InputBoxes>

        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>

      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>

      <ConfirmLocationContainer>
        <ConfirmLocation>Confirm Location</ConfirmLocation>
      </ConfirmLocationContainer>
    </Wrapper>
  );
};

const SearchSuggestions = ({ list, setState }) => {
  if (list.isFocused) {
    return (
      <div className="absolute bg-white z-50 w-full shadow-md px-2 cursor-pointer">
        {list.list?.map((item, index) => (
          <div
            onClick={() => setState(item)}
            key={index}
            className="mb-1 border-b last:border-b-0"
          >
            <div>
              <h3>{item}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
};

const Wrapper = tw.div`
  bg-gray-200
  h-screen
  flex
  flex-col
`;

const ButtonContainer = tw.div`
  bg-white 
  px-4
  cursor-pointer
`;

const InputContainer = tw.div`
  flex
  items-center
  justify-center
  bg-white
  mt-1
  px-4
  pb-2
`;

const FromToIcons = tw.div`
  w-10
  flex
  flex-col
  items-center
`;

const Circle = tw.img`
  h-2.5
`;

const Line = tw.img`
  h-10
`;

const Square = tw.img`
  h-3
`;

const InputBoxes = tw.div`
  flex-col 
  flex
  flex-1
  px-3
`;

const Input = tw.input`
  h-10
  bg-gray-200
  my-2
  rounded-sm
  outline-none
  p-2
  border-none
  w-full
`;

const PlusIcon = tw.img`
  w-10
  h-10
  bg-gray-200
  rounded-full
  mx-1
`;

const SavedPlaces = tw.div`
  flex 
  items-center 
  bg-white 
  mt-3 
  px-4
  py-2
`;

const StarIcon = tw.img`
  bg-gray-400
  w-10
  h-10 
  p-2
  rounded-full
  mr-2
`;

const ConfirmLocationContainer = tw.div`
  w-full
  flex
  items-center
  justify-center
`;

const ConfirmLocation = tw.button`
  bg-black
  w-[95%]
  text-white
  mt-2
  py-3
  rounded-md
  focus:ring-2
  focus:ring-offset-2
  focus:ring-black
`;

export default Search;
