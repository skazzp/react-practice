const TransactionHistory = ({ transactionType, changePage }) => {
  return (
    <>
      {console.log(transactionType)}
      <div>Transaction History {transactionType}</div>
      <button
        onClick={() => {
          changePage('main');
        }}
      >
        back
      </button>
    </>
  );
};

export default TransactionHistory;
