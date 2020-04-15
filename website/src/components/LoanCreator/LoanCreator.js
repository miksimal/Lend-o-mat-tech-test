import React, { Component } from 'react';
import './LoanCreator.css';
import '../Button.css';

const LOAN_PRICE = 1.05;
let emptyState = {
    borrowerName: "",
    repaymentAmount: "",
    fundingAmount: ""
};

class LoanCreator extends Component {
    
    state = emptyState;

    render () {
        return (
            <div className="LoanCreator">
                <h2>Want a loan?</h2>
                <form>
                <label>Full name</label>
                <input type="text" required  value={this.state.borrowerName} 
                    onChange={(event) => this.setState({borrowerName: event.target.value})} />
                <label>Amount in GBP</label>
                <input type="number" required value={this.state.fundingAmount} 
                    onChange={(event) => this.setState({fundingAmount: parseFloat(event.target.value), 
                    repaymentAmount: parseFloat((event.target.value*LOAN_PRICE).toFixed(2))})} />
                <label>Repayment amount</label>
                <input type="number" readOnly value={this.state.repaymentAmount} />
                <button className="Button" onClick={ () => this.props.createLoanHandler(this.state) }>Create Loan</button>
                </form>
            </div>
        );
    }
}

export default LoanCreator;