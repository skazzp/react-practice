import Header from '../Header/Header';
import TransactionForm from '../TransactionForm/TransactionForm';
import MainButtons from '../MainButtons/MainButtons';
import Categories from '../Categories/Categories';
import { categoriesList } from '../../categories-list';

const MainPage = () => {
  return (
    <>
      <Header btnContent={undefined} title={'Журнал расходов'} />
      <TransactionForm />
      <MainButtons />
      <Categories categoriesList={categoriesList} />
    </>
  );
};
export default MainPage;
