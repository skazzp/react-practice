import { Wrapper, Button } from './MainButtons.styled';

const MainButtons = ({ changePage }) => {
  return (
    <Wrapper>
      <Button
        onClick={() => {
          changePage('exp');
        }}
      >
        Expenses
      </Button>
      <Button
        onClick={() => {
          changePage('inc');
        }}
      >
        Income
      </Button>
    </Wrapper>
  );
};

export default MainButtons;
