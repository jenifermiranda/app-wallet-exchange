import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: '',
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await data.json();
    const array = Object.keys(response).filter((item) => item !== 'USDT');
    dispatch(addExpense(array));
  }

  render() {
    const { value, description, currency, tag, method } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <div>WalletForm</div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input
              type="number"
              name="value"
              data-testid="value-input"
              value={ value }
              placeholder="0"
              id="valor"
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              data-testid="currency-input"
              value={ currency }
            >
              {currencies.map((coin) => (
                <option key={ coin } value={ coin }>{coin}</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de Pagamento:
            <select
              name="method"
              id="method"
              data-testid="method-input"
              value={ method }
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select
              name="tag"
              id="tag"
              data-testid="tag-input"
              value={ tag }
            >
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <label>
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              value={ description }
              placeholder="Descricao"
            />
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
