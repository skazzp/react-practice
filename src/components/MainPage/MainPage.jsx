import Header from '../Header/Header';
import TransactionForm from '../TransactionForm/TransactionForm';
import MainButtons from '../MainButtons/MainButtons';
import Categories from '../Categories/Categories';
import { categoriesList } from '../../categories-list';
import { Component } from 'react';

class MainPage extends Component {
  state = {
    isCategories: false,
    date: '',
    time: '',
    category: 'Food',
    sum: '',
    currency: 'UAH',
    comment: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({ [name]: value });
  };
  openCategories = () => {
    this.setState({ isCategories: true });
  };
  closeCategories = () => {
    this.setState({ isCategories: false });
  };
  setCategory = categoryName => {
    this.setState({ category: categoryName });
  };

  render() {
    const { isCategories, ...dataForm } = this.state;
    return (
      <>
        {!this.state.isCategories ? (
          <>
            <Header btnContent={undefined} title={'Журнал расходов'} />
            <TransactionForm
              openCategories={this.openCategories}
              handleChange={this.handleChange}
              dataForm={dataForm}
              cbOnSubmit={this.props.addTransaction}
            />
            <MainButtons changePage={this.props.changePage} />
          </>
        ) : (
          <Categories
            setCategory={this.setCategory}
            categoriesList={categoriesList}
            closeCategories={this.closeCategories}
          />
        )}
      </>
    );
  }
}
export default MainPage;
