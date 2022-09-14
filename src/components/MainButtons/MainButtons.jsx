const MainButtons = ({ changePage }) => {
  return (
    <div>
      <button
        onClick={() => {
          changePage('exp');
        }}
      >
        Expenses
      </button>
      <button
        onClick={() => {
          changePage('inc');
        }}
      >
        Income
      </button>
    </div>
  );
};

export default MainButtons;
