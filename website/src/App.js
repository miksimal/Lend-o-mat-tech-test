import React, { Component } from 'react';
import './App.css';
import LoanOverview from './components/LoanOverview/LoanOverview';
import LoanCreator from './components/LoanCreator/LoanCreator';
import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:5001/api/Loans';

class App extends Component {
  state = {
    loans: []
}

  componentDidMount () {
    axios.get('/')
        .then( response => {
            this.setState( { loans: response.data } );
        } )
        .catch( error => {
            window.alert("Sorry, something went wrong. Please try again.");
        })
  }

  deleteLoanHandler = (id) => {
    axios.delete('/' + id )
        .then( response => {
            let updatedLoans = [];
            for (var i = 0; i < this.state.loans.length; i++) {
                if (!(id === this.state.loans[i].id)) {
                    updatedLoans.push(this.state.loans[i]);
                }
            }
            this.setState( { loans: updatedLoans } );
        } )
        .catch( error => {
            window.alert("Sorry, something went wrong. Please try again.");
        })
  }

  createLoanHandler = (newLoan) => {
    if(newLoan.borrowerName && newLoan.fundingAmount) {
     axios.post( '/', newLoan )
        .then( response => {
          let updatedLoans = [...this.state.loans];
          updatedLoans.push(response.data);
          this.setState( { loans: updatedLoans } );
          window.alert("Success! Your money is being wired 💸")
        } )
        .catch( error => {
          window.alert("Sorry, something went wrong. Please try again.")
          return false;
        })
    }
  }

  getLoanByIdHandler = (id) => {
    if (id) {
        axios.get('/' + id)
            .then( response => {
                this.setState( { loans: [response.data] } );
        } )
        .catch( error => {
            this.setState( { loans: [] } );
        })
    } else {
        axios.get('/')
            .then( response => {
                this.setState( { loans: response.data } );
            } )
            .catch( error => {
                window.alert("Sorry, something went wrong. Please try again.");
            })
    }
  }

  render() {
      return (
        <div className="App">
            <h3>Lend-o-Matic: instant loans with just 5% interest! 💸</h3>
            <div>
              <LoanCreator createLoanHandler={this.createLoanHandler}/>
              <LoanOverview 
                getLoanByIdHandler={this.getLoanByIdHandler} 
                loans={this.state.loans}
                deleteLoanHandler={this.deleteLoanHandler} />
            </div>
        </div>
        )
  }

}

export default App;