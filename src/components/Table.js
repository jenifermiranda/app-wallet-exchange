import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../redux/actions';

class Table extends Component {
  handleClick = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteExpense(id));
  };

  render() {
    const { expensesState } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {expensesState.map((expense) => (
          <tbody key={ expense.id }>
            <tr>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>
                {parseFloat(expense.exchangeRates[expense.currency].ask)
                  .toFixed(2)}
              </td>
              <td>
                {parseFloat(expense.value * expense.exchangeRates[expense.currency].ask)
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button>Editar</button>
                <button
                  data-testid="delete-btn"
                  onClick={ () => this.handleClick(expense.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>

          </tbody>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesState: state.wallet.expenses,
});

Table.propTypes = {
  expensesState: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,

};

export default connect(mapStateToProps)(Table);
