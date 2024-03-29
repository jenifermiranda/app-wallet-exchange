import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currencyThunk, expensesThunk } from '../redux/actions';
import '../css/WalletForm.css';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  // manda a lista de moedas pro estado global
  async componentDidMount() {
    const { coinList } = this.props;
    coinList();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { expensesClick } = this.props;
    const { id } = this.state;
    expensesClick(this.state);
    this.setState({
      id: id + 1,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  };

  render() {
    const { value, description, currency, tag, method } = this.state;
    const { currencies } = this.props;
    return (
      <div className="wallet-form">
        <form>

          <label htmlFor="valor" className="wallet-form-label">
            Valor:
            <input
              type="number"
              name="value"
              data-testid="value-input"
              value={ value }
              onChange={ this.handleChange }
              placeholder="0"
              id="valor"
              className="wallet-form-input"
            />
          </label>

          <label htmlFor="currency" className="wallet-form-label">
            Moeda:
            <select
              name="currency"
              id="currency"
              data-testid="currency-input"
              value={ currency }
              onChange={ this.handleChange }
              className="wallet-form-input"
            >
              {currencies && currencies.map((coin) => (
                <option key={ coin } value={ coin }>{coin}</option>
              ))}
            </select>
          </label>

          <label htmlFor="method" className="wallet-form-label">
            Método de Pagamento:
            <select
              name="method"
              id="method"
              data-testid="method-input"
              value={ method }
              onChange={ this.handleChange }
              className="wallet-form-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag" className="wallet-form-label">
            Tag:
            <select
              name="tag"
              id="tag"
              data-testid="tag-input"
              value={ tag }
              onChange={ this.handleChange }
              className="wallet-form-select"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <label className="wallet-form-label">
            Descrição:
            <input
              name="description"
              type="text"
              data-testid="description-input"
              value={ description }
              onChange={ this.handleChange }
              placeholder="Descricao"
              className="wallet-form-input"
            />
          </label>

          <button
            type="button"
            onClick={ this.handleClick }
            className="wallet-form-button"
          >
            Adicionar despesa
          </button>

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expensesState: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  coinList: () => dispatch(currencyThunk()),
  expensesClick: (form) => dispatch(expensesThunk(form)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  coinList: PropTypes.func.isRequired,
  expensesClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
