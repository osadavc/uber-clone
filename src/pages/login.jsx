import { useEffect } from "react";
import router, { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import { auth, googleAuthProvider } from "../../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const Router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/");
      }
    });
  }, []);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider).catch((err) => {
      console.log(err);
    });
  };

  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
      <Title>Login to access your account</Title>
      <img src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={signInWithGoogle}>
        Sign In With Google
      </SignInButton>
    </Wrapper>
  );
};

const Wrapper = tw.div`
	flex
	flex-col
	p-5
	pt-10
`;

const SignInButton = tw.button`
	bg-black
  text-white
  mt-6
  py-3
  rounded-md
  focus:ring-2
  focus:ring-offset-2
  focus:ring-black
  text-lg
  mb-4
`;

const UberLogo = tw.img`
	h-12 
	w-auto 
	object-contain 
	self-start
`;

const Title = tw.h1`
	text-4xl 
	pt-4
	text-gray-500
	w-[85%]
`;

export default Login;
