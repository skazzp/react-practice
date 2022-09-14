import { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

class App extends Component {
  state = {
    activePage: 'main',
  };
  changePage = page => {
    this.setState({ activePage: page });
  };

  render() {
    return (
      <div className="App">
        {this.state.activePage === 'main' ? (
          <MainPage changePage={this.changePage} />
        ) : (
          <TransactionHistory
            transactionType={this.state.activePage}
            changePage={this.changePage}
          />
        )}
      </div>
    );
  }
}

export default App;
