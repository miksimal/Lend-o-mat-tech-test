import React, { Fragment } from 'react';

const loan = (props) => (
    <Fragment>
    <td>{props.id}</td>
    <td>{props.borrowerName}</td>
    <td>£{props.fundingAmount}</td>
    <td>£{props.repaymentAmount}</td>
    </Fragment>
)

export default loan;