import StyledYourResults from "./style";
import Text from "@/components/Text";
import Score from "./Score";

const YourResults = () => {
  return (
    <StyledYourResults>
      <Text as="h2" fontSize="1.5rem" weight="700" color="--Light-lavender">
        Your Result
      </Text>
      <Score />
      <Text as="h3" fontSize="2rem" weight="800" color="--White">
        Grate
      </Text>
      <Text as="p" fontSize="1.125rem" weight="500" color="--Light-lavender">
        You scored higher than 65% of the people who have taken these tests.
      </Text>
    </StyledYourResults>
  );
};

export default YourResults;
