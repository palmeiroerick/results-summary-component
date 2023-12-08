"use client";
import GlobalStyle from "@/style/GlobalStyle";
import StyledMain from "@/app/style";
import YourResults from "@/components/YourResults";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <YourResults />
      </StyledMain>
    </>
  );
};

export default Home;
