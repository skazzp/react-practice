import { Component } from 'react';

class TransactionForm extends Component {
  // state = {
  //   date: '',
  //   time: '',
  //   category: 'Food',
  //   sum: '',
  //   currency: 'UAH',
  //   comment: '',
  // };
  // handleChange = e => {
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //   this.setState({ [name]: value });
  // };
  render() {
    const { date, time, category, sum, currency, comment } = this.state;
    return (
      <form action="submit">
        <label htmlFor="date">
          <p>Date</p>
          <input type="date" name="date" value={date} onChange={this.handleChange} />
        </label>
        <label htmlFor="">
          <p>Time</p>
          <input type="time" name="time" value={time} onChange={this.handleChange} />
        </label>
        <label htmlFor="">
          <p>Category</p>
          <input
            type="button"
            value={category}
            name="category"
            onClick={this.props.openCategories}
          />
        </label>
        <label htmlFor="">
          <p>Sum</p>
          <input type="text" value={sum} name="sum" onChange={this.handleChange} />
        </label>
        <label htmlFor="">
          <p>Currency</p>
          <input type="button" value={currency} name="currency" onChange={this.handleChange} />
        </label>
        <div>
          <input
            type="text"
            value={comment}
            placeholder="Comment"
            name="comment"
            id=""
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}
// const TransactionForm = ({ openCategories }) => {
//   return (
//     <form action="submit">
//       <label htmlFor="date">
//         <p>Date</p>
//         <input type="date" />
//       </label>
//       <label htmlFor="">
//         <p>Time</p>
//         <input type="time" />
//       </label>
//       <label htmlFor="">
//         <p>Category</p>
//         <input type="button" value={'Category'} onClick={() => openCategories()} />
//       </label>
//       <label htmlFor="">
//         <p>Sum</p>
//         <input type="text" />
//       </label>
//       <label htmlFor="">
//         <p>Currency</p>
//         <input type="button" value={'UAH'} onChange={null} />
//       </label>
//       <div>
//         <input type="text" placeholder="Comment" name="" id="" />
//       </div>
//     </form>
//   );
// };

export default TransactionForm;
