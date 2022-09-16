import { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Container from './components/Container/Container';
class App extends Component {
  state = {
    activePage: 'main',
    transactions: [],
  };
  changePage = (page = 'main') => {
    this.setState({ activePage: page });
  };
  addTransaction = transaction => {
    this.setState(prevState => {
      return { transactions: [...prevState.transactions, transaction] };
    });
  };

  render() {
    return (
      <Container className="App">
        {this.state.activePage === 'main' ? (
          <MainPage changePage={this.changePage} addTransaction={this.addTransaction} />
        ) : (
          <TransactionHistory
            transactionType={this.state.activePage}
            changePage={this.changePage}
            transactions={this.state.transactions}
          />
        )}
      </Container>
    );
  }
}

export default App;
