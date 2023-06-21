import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <div>
        <div>WalletForm</div>
        <form>
          <input
            type="number"
            name="value"
            value="value"
            data-testid="value-input"
            placeholder="0"
          />
          <input
            type="text"
            name="description"
            value="description"
            data-testid="description-input"
            placeholder="Descricao"
          />
          <label htmlFor="currency">
            <select
              name="currency"
              id="currency"
              data-testid="currency-input"
            >
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

export default WalletForm;
