const TransactionForm = ({ openCategories }) => {
  return (
    <form action="submit">
      <label htmlFor="date">
        <p>Date</p>
        <input type="date" />
      </label>
      <label htmlFor="">
        <p>Time</p>
        <input type="time" />
      </label>
      <label htmlFor="">
        <p>Category</p>
        <input type="button" value={'Category'} onClick={() => openCategories()} />
      </label>
      <label htmlFor="">
        <p>Sum</p>
        <input type="text" />
      </label>
      <label htmlFor="">
        <p>Currency</p>
        <input type="button" value={'UAH'} onChange={null} />
      </label>
      <div>
        <input type="text" placeholder="Comment" name="" id="" />
      </div>
    </form>
  );
};

export default TransactionForm;
