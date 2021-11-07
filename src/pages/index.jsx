import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Home = () => {
  const [user, setUser] = useState();
  const Router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
        Router.replace("/login");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user?.displayName}</Name>
            <UserImage src={user?.photoURL} onClick={() => signOut(auth)} />
          </Profile>
        </Header>

        <Link href="/search">
          <ActionButtons>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>

            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
              Wheels
            </ActionButton>

            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
              Reserve
            </ActionButton>
          </ActionButtons>
        </Link>

        <InputButton>Where To ?</InputButton>
      </ActionItems>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex
  flex-col
  h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex
  justify-between
  items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex
  items-center
`;

const Name = tw.div`
  mr-4 
  text-md
  font-semibold
`;

const UserImage = tw.img`
  h-12
  w-12
  rounded-full
  border
  border-gray-300
  p-px
  cursor-pointer
`;

const ActionButtons = tw.div`
  flex
  space-x-3
`;

const ActionButton = tw.button`
  bg-gray-200
  flex-1
  flex
  flex-col
  justify-center
  items-center
  rounded-lg
  transition
  hover:scale-[104%]
  hover:shadow-sm
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.button`
  h-20
  bg-gray-200
  w-full
  text-2xl
  font-semibold
  flex
  items-center
  justify-center
  rounded-lg
  mt-5
`;

export default Home;
