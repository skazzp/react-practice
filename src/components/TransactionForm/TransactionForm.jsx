import { Form, Label, InputTitle, Input, Submit } from './TransactionForm.styled';
import sprite from '../../assets/icons/sprite.svg';

const TransactionForm = ({ openCategories, handleChange, dataForm, cbOnSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    cbOnSubmit(dataForm);
  };
  const { date, time, category, sum, currency, comment } = dataForm;
  return (
    <Form action="submit" onSubmit={handleSubmit}>
      <Label htmlFor="date">
        <InputTitle>Date</InputTitle>
        <Input type="date" name="date" value={date} onChange={handleChange} />
      </Label>
      <Label htmlFor="">
        <InputTitle>Time</InputTitle>
        <Input type="time" name="time" value={time} onChange={handleChange} />
      </Label>
      <Label htmlFor="">
        <InputTitle>Category</InputTitle>
        <Input type="button" value={category} name="category" onClick={openCategories} />
      </Label>
      <Label htmlFor="">
        <InputTitle>Sum</InputTitle>
        <Input type="text" value={sum} name="sum" onChange={handleChange} />
      </Label>
      <Label htmlFor="">
        <InputTitle>Currency</InputTitle>
        <Input type="button" value={currency} name="currency" onChange={handleChange} />
      </Label>
      <div>
        <Input
          type="text"
          value={comment}
          placeholder="Comment"
          name="comment"
          id=""
          onChange={handleChange}
        />
      </div>
      <Submit type="submit">
        <svg>
          <use href={sprite + '#icon-checkmark'}></use>
        </svg>
      </Submit>
    </Form>
  );
};

export default TransactionForm;
