import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expensesState } = this.props;
    const calculate = expensesState.reduce((acc, curr) => {
      return acc + curr.value * curr.exchangeRates[curr.currency].ask;
    }, 0).toFixed(2);

    return (
      <div>
        <p data-testid="email-field">
          Email:
          {' '}
          {email}
        </p>
        <span>Despesa Total: </span>
        <span data-testid="total-field">{calculate}</span>
        <span> </span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expensesState: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expensesState: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps)(Header);
