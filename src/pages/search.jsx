import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import ArrowLeft from "../components/icons/ArrowLeft";

const Search = () => {
  const Router = useRouter();

  const goBack = () => {
    Router.back();
  };

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
          <Input placeholder="Enter Pickup Location" />
          <Input placeholder="Where To ?" />
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
