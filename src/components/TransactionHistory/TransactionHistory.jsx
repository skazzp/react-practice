import Header from '../Header/Header';
import { List, Item, MainWrapper, DateContainer, Summary } from './TransactionHistory.styled';

const TransactionHistory = ({ transactionType, changePage, transactions }) => {
  return (
    <>
      <Header
        btnContent={'back'}
        title={transactionType === 'inc' ? 'Incomes' : 'Expanses'}
        closeCategories={changePage}
      />

      {console.log(transactions)}
      {/* <div>Transaction History {transactionType}</div> */}
      <List>
        {transactions.map(({ date, time, category, sum, currency, comment }) => {
          return (
            <Item>
              <MainWrapper>
                <div>
                  <DateContainer>
                    <span>{date}</span>
                    <span>{time}</span>
                  </DateContainer>
                  <p>{comment}</p>
                </div>
                <div>
                  <Summary>{sum}</Summary>
                  <p>{currency}</p>
                </div>
              </MainWrapper>
              <button type="button">...</button>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default TransactionHistory;
