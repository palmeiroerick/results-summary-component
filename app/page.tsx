"use client";
import GlobalStyle from "@/style/GlobalStyle";
import StyledMain from "@/app/style";
import Text from "@/components/Text";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <StyledMain>
          <Text as="h1" fontSize="24px" weight="700" color="--Dark-gray-blue">
            hello
          </Text>
          <Text as="p" fontSize="12px" weight="500" color="--Light-lavender">
            hello
          </Text>
      </StyledMain>
    </>
  );
};

export default Home;
