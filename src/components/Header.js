import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/Header.css';

class Header extends Component {
  render() {
    const { email, expensesState } = this.props;
    const calculate = expensesState.reduce((acc, curr) => {
      return acc + curr.value * curr.exchangeRates[curr.currency].ask;
    }, 0).toFixed(2);

    return (
      <div className="header">
        <div className="header-title">
          <span
            style={ {
              color: 'rgba(0, 59, 229, 1)',
              fontFamily: 'serif',
              fontSize: '30px',
              fontWeight: 'normal',
            } }
          >
            Wallet
          </span>
          <span> </span>
          <span
            style={ {
              color: 'rgba(47, 193, 140, 1)',
              fontFamily: 'sans-serif',
              fontSize: '30px',
              fontWeight: 'bold',
            } }
          >
            Exchange
          </span>
        </div>
        <div className="header-content">
          <span className="total-expenses">
            Despesa Total:
            {' '}
            {calculate}
            {' '}
            BRL
          </span>
          <span className="email" data-testid="email-field">
            Email:
            {' '}
            {email}
          </span>
        </div>
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
