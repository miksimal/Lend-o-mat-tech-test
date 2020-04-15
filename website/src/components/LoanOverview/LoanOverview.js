import React, { Component } from 'react';
import Loan from '../Loan'
import './LoanOverview.css'

class LoanOverview extends Component {
    
    state = {
        loans: []
    }

    render() {
        let tableHead = (                        
            <tr>
                <th></th>
                <th>id</th>
                <th>name</th>
                <th>borrowed</th>
                <th>to repay</th>
            </tr>)
        
        let loanOverview = this.props.loans.map( loan => {
            return (
                <tr key={loan.id}>
                    <td onClick={() => this.props.deleteLoanHandler(loan.id)}>❌</td>
                    <Loan
                        id={loan.id}
                        borrowerName={loan.borrowerName}
                        fundingAmount={loan.fundingAmount}
                        repaymentAmount={loan.repaymentAmount} />
                </tr>
            )});
        
        if (this.props.loans.length === 0) {
            tableHead = <tr className="NothingFound"><td>🤷‍♂</td></tr>;
            loanOverview = <tr className="NothingFound"><td>No loans found</td></tr>;
        }


        return (
            <div className="LoanOverview">
                <h3>Loan Summary</h3>
                <div>
                    <label>Too many loans? Search by id:</label>
                    <input type="number" onChange={(event) => this.props.getLoanByIdHandler(event.target.value)} />
                </div>
                <table>
                    <thead>
                        {tableHead}
                    </thead>

                    <tbody>
                        {loanOverview}
                    </tbody>
                
                </table>
            </div>
        )
    }

};

export default LoanOverview;