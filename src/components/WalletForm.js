import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from '../redux/actions';

class WalletForm extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await data.json();
    const array = Object.keys(response).filter((item) => item !== 'USDT');
    console.log(array);
    dispatch(addExpense(array));
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <div>
        <div>WalletForm</div>
        <form>
          <input
            type="number"
            data-testid="value-input"
            placeholder="0"
          />
          <input
            type="text"
            data-testid="description-input"
            placeholder="Descricao"
          />
          <label htmlFor="currency">
            <select name="currency" id="currency" data-testid="currency-input">
              {currencies.map((currency) => (
                <option key={ currency } value={ currency }>{currency}</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            <select
              name="method"
              id="method"
              data-testid="method-input"
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            <select
              name="tag"
              id="tag"
              data-testid="tag-input"
            >
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
