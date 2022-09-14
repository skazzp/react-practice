import Header from '../Header/Header';
import TransactionForm from '../TransactionForm/TransactionForm';
import MainButtons from '../MainButtons/MainButtons';
import Categories from '../Categories/Categories';
import { categoriesList } from '../../categories-list';
import { Component } from 'react';

class MainPage extends Component {
  state = {
    isCategories: false,
  };
  openCategories = () => {
    this.setState({ isCategories: true });
  };
  closeCategories = () => {
    this.setState({ isCategories: false });
  };
  render() {
    return (
      <>
        {!this.state.isCategories ? (
          <>
            <Header btnContent={undefined} title={'Журнал расходов'} />
            <TransactionForm openCategories={this.openCategories} />
            <MainButtons changePage={this.props.changePage} />
          </>
        ) : (
          <Categories categoriesList={categoriesList} closeCategories={this.closeCategories} />
        )}
      </>
    );
  }
}
export default MainPage;
